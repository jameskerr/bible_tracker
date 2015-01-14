class Reader < ActiveRecord::Base
  has_many :verses
  accepts_nested_attributes_for :verses, allow_destroy: true
end
