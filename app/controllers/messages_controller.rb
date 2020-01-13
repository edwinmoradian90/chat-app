class MessagesController < ApplicationController

  def new
    @message = current_user.messages.new
  end

  def create
    @user = current_user
    @message = current_user.messages.create(message_params)
    if @message.save
      ActionCable.server.broadcast 'room_channel',
                                   content: @message,
                                   user: @user.user_name

    end
  end

  private

  def message_params
    params.require(:message).permit(:content, :created_at)
  end
end
