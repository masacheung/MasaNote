class Api::NotesController < ApplicationController
    before_action :require_logged_in, only: [:create, :index]

    def index
        @notes = @current_user.notes
        render :index
    end

    def show
        @note = Note.find_by(id: params[:note][:id])
        render :show
    end

    def create
        @note = Note.new(note_params)
        
        if @note.save
            render :show
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    def update
        @note = Note.find_by(id: params[:note][:id])

        if @note.update(note_params)
            render :show
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    def destroy
        @note = Note.find_by(id: params[:id])

        if @note.destroy
            render :show
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    private
    def note_params
        params.require(:note).permit(:title, :body, :user_id, :notebook_id)
    end
end