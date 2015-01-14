var height_of_verse   = 40;
var height_of_chapter = 40;
var verses_per_row    = 10;
var mouse_is_down     = false;
var marking_read      = false;

$(document).ready( function() {
  $('.chapter-number').on('click', onChapterClick);
  $('.verse-number').on('mousedown', onVerseMousedown);
  $('.verse-number').on('mouseup', onVerseMouseup);
  $('.verse-number').on('mouseenter', onVerseMouseenter);
  $('.verse-number').each(function() {
   calculateProgress($(this));
   console.log('wow');
  })
  calculateTotalProgress();
});


function onChapterClick() {
  if ($(this).parent().hasClass('expanded')) { 
    collapseChapter($(this).parent());
  } 
  else { 
    collapseAllChapters();
    expandChapter($(this).parent());
  }
}

function onVerseMousedown(e) {
  mouse_is_down = true;
  $this = $(this);
  if ($this.hasClass('read')) {
    marking_read = false;
    markAsUnread($this);
  } else {
    marking_read = true;
    markAsRead($this);
  }
  calculateProgress($this);
  e.stopPropagation();
}

function onVerseMouseup(e) {
  mouse_is_down = false;
}

function onVerseMouseenter(e) {
  $verse = $(this);
  if (mouse_is_down) {
    if (marking_read) markAsRead($verse);
    else              markAsUnread($verse);
    calculateProgress($verse);
  }
}

function markAsRead($verse) {
  $verse.addClass('read');
  addVerse($verse[0].id);
}

function markAsUnread($verse) {
  $verse.removeClass('read');
  removeVerse($verse[0].id);
}

function addVerse(number) {
  $.ajax({
    method: 'post',
    data: {verse: {number: number}},
    dataType: 'json',
    url: reader_id+'/add_verse',
    success: function() { console.log('saved'); }
  });
}

function removeVerse(number) {
  $.ajax({
    method: 'post',
    data: {verse: {number: number}},
    dataType: 'json',
    url: reader_id+'/remove_verse',
    success: function() { console.log('deleted'); }
  });
}

function expandChapter($chapter) {
  var $verses = $chapter.find('.verses');
  var $row = $chapter.parent();
  var number_of_verses = $verses.data('verses');
  $row.css('height', expandedRowHeight(number_of_verses));
  $verses.addClass('visible');
  $chapter.addClass('expanded');
}

function collapseChapter($chapter) {
  var $verses = $chapter.find('.verses');
  var $row = $chapter.parent();
  $row.css('height', height_of_chapter + 'px');
  $verses.removeClass('visible');
  $chapter.removeClass('expanded');
}

function collapseAllChapters() {
  $('.chapter.expanded').each(function() {
    collapseChapter($(this));
  });
}

function expandedRowHeight(num_verses) {
  return height_of_chapter + 
         Math.ceil(num_verses / verses_per_row) * 
         height_of_verse;
}

function calculateProgress($verse) {
  var total = $verse.parent().data('verses');
  var read  = $verse.parent().find('.read').length;
  var percent = (read / total) * 100;
  $verse.parent().parent().find('.progress').css('width', percent+'%');
  calculateTotalProgress();
}

function calculateTotalProgress() {
  var total_verses = $('.verse-number').length;
  var read_verses  = $('.verse-number.read').length;
  var percent = (read_verses / total_verses) * 100;
  $('#total-progress').html('Percent Read ' + Math.round(percent) + '%');
  $('#total-progress-bar').css('width', percent + '%');
}