class AddReaderIdToVerses < ActiveRecord::Migration
  def change
    add_reference :verses, :reader, index: true
    add_foreign_key :verses, :readers
  end
end
