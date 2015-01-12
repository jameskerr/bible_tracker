class ReadController < ApplicationController
  def index
    @chapters_per_row = 10
    @books = Bible.data
  end
end
