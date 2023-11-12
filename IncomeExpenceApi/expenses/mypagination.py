from rest_framework.pagination import PageNumberPagination

class Mypagination(PageNumberPagination):
    page_size = 10
    page_query_param = 'p'
    page_size_query_param = 'record'
    max_page_size = 30
    last_page_strings = 'end'
