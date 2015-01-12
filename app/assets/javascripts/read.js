var height_of_verse   = 40;
var height_of_chapter = 40;
var verses_per_row    = 10;

$(document).ready( function() {
  $('.chapter').on('click', onChapterClick);
  $('.verse-number').on('click', onVerseClick);
});


function onChapterClick() {
  // already expanded
  if ($(this).hasClass('expanded')) { 
    collapseChapter($(this));
  } 
  // Not yet expanded 
  else { 
    collapseAllChapters();
    expandChapter($(this));
  }
}

function onVerseClick(e) {
  $this = $(this);
  if ($this.hasClass('read')) {
    $this.removeClass('read');
  } else {
    $this.addClass('read');
  }
  calculateProgress($(this));
  e.stopPropagation();
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
  console.log(percent);
  $verse.parent().parent().find('.progress').css('width', percent+'%');
}

function setProgress($progress, percent) {
  $progress.css('width', percent * 100 + '%');
}