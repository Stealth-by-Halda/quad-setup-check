class HomeController < ApplicationController
  def show
    @ruby_version = RUBY_VERSION
    @rails_version = Rails.version
    @database = ActiveRecord::Base.connection.select_value("SHOW server_version")
  end
end
