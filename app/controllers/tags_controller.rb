class TagsController < ApplicationController

  def index
    @tags = Tag.all
    respond_to do |format|
      format.json { render json: @tags }
    end
  end

  def create
    @tag = Tag.new(whitelisted_tag_params)
    respond_to do |format|
      if @tag.save
        format.json { render json: @tag }
      else
        format.json { render nothing: true, status: 400 }
      end
    end
  end

  private

  def whitelisted_tag_params
    params.require(:tag).permit(:positionX, :positionY, :user_id)
  end

end
