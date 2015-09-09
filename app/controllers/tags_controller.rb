class TagsController < ApplicationController

  def index
    @tags = Tag.all
    respond_to do |format|
      format.json { render json: @tags }
    end
  end

  def create
    @tag = Tag.new(params)
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
  end

end
