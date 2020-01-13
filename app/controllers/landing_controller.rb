# frozen_string_literal: true

class LandingController < ApplicationController

  def index
    @user = current_user
    @message = current_user.messages.new
  end
end
