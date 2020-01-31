require 'rubygems'
require 'nokogiri'
require 'pry'
require 'open-uri'

class UrlsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def get_theme_name

        html_data = open(url_params.values[0]).read
        object = Nokogiri::HTML(html_data)
        themeName = object.css('script').text.scan(/^Shopify.theme = .*\",/)[0].gsub('Shopify.theme = {"name":"', '').gsub('",', '')
        url_params_shopify = themeName.gsub(' ', '+')
        url_params_envatomarket = themeName.gsub(' ', '%20')
        render json: {theme_name: themeName, url_params_shopify: url_params_shopify, url_params_envatomarket: url_params_envatomarket}

    end

    private 

    def url_params

        params.permit(:url)

    end

end
