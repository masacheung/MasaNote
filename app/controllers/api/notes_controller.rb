class Api::NotesController < ApplicationController
    before_action :require_logged_in, only: [:create, :index]

    def index
        @notes = @current_user.notes
        render :index
    end

    def show
        @note = selected_note
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
        @note = selected_note

        if @note.update(note_params)
            render :show
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    def destroy
        @note = selected_note

        if @note.destroy
            render :show
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    private
    def selected_note
        current_user.notes.find_by(id: params[:id])
    end

    def note_params
        params.require(:note).permit(:title, :body, :user_id, :notebook_id)
    end
end