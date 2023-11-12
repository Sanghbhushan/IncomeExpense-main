
from django.http import JsonResponse

def error_404(request, exception):
    msg = ('The endpoint not found')

    response = JsonResponse(data={'message':msg, 'status code':404})
    response.status_code = 404
    return response
def error_500(request, exception):
    msg = ('Error occured by us')

    response = JsonResponse(data={'message':msg, 'status code':500})
    response.status_code = 500
    return response