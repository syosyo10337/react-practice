class TasksController < ApplicationController
  def index
    tasks = Task.all
    json
  end
end
