class Api::NotebooksController < ApplicationController
    before_action :require_logged_in, only: [:create, :index, :update, :destroy, :show]

    def index
        @notebooks = current_user.notebooks
        render :index
    end

    def show
        @notebook = Notebook.find_by(id: params[:id])
        @notes = @notebook.notes
        render :show
    end

    def create
        @notebook = Notebook.new(notebook_params)
        
        if @notebook.save
            render :show
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    def update
        @notebook = Notebook.find_by(id: params[:id])

        if @notebook.update(notebook_params)
            render :show
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    def destroy
        @notebook = Notebook.find_by(id: params[:id])

        
        if ((@notebook.id != 1) && (@notebook.destroy))
            render :show
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    private
    def notebook_params
        params.require(:notebook).permit(:name, :user_id)
    end
end