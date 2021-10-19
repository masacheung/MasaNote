class Api::TagsController < ApplicationController

    def index
        if(current_user)
            @tags = current_user.tags
            render :index
        end
    end

    def show
        @tag = Tag.find_by(id: params[:id])
        render :show
    end

    def create
        @tag = Tag.new(tag_params)
        
        if @tag.save
            render :show
        else
            render json: @tag.errors.full_messages, status: 422
        end
    end

    def update
        @tag = Tag.find_by(id: params[:id])
        
        if @tag.update(tag_params)
            render :show
        else
            render json: @tag.errors.full_messages, status: 422
        end
    end

    def destroy
        @tag = Tag.find_by(id: params[:id])

        if @tag.destroy
            render :show
        else
            render json: @tag.errors.full_messages, status: 422
        end
    end

    private
    def tag_params
        params.require(:tag).permit(:name, :user_id)
    end
end