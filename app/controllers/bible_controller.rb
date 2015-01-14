class BibleController < ApplicationController
 

  def index
    
  end

  def new
    @bible = Bible.create reading_record: Bible.data
    redirect_to @bible
  end

  def show
    @chapters_per_row = 10
    @bible = Bible.find(params[:id])
  end

  def update
    @bible = Bible.find(params[:id])
    @bible.update(bible_params)
  end

  def bible_params
    params[:bible].permit(:reading_record).tap do |white|
      white[:reading_record] = params[:bible][:reading_record]
    end
  end
end
