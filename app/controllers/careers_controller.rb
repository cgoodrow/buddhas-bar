class CareersController < ApplicationController
  def new
  @career = Career.new
end

def create
  @career = Career.new(params[:career])
  @career.request = request
  if @career.deliver
    flash.now[:notice] = 'Employment Submission Send! We will contact you soon!'
  else
    flash.now[:error] = 'Cannot send message.'
    render :new
  end
end
end
