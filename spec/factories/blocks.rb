# frozen_string_literal: true
# == Schema Information
#
# Table name: blocks
#
#  id                  :integer          not null, primary key
#  kind                :integer
#  content             :text(65535)
#  week_id             :integer
#  created_at          :datetime
#  updated_at          :datetime
#  title               :string(255)
#  order               :integer
#  due_date            :date
#  training_module_ids :text(65535)
#  points              :integer
#  is_deletable        :boolean          default(TRUE)
#  is_editable         :boolean          default(TRUE)
#

FactoryBot.define do
  factory :block do
    kind { Block::KINDS['assignment'] }
    content { 'MyString' }
    order { 0 }
  end
end
