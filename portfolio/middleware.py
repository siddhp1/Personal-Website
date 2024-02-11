class XFrameOptionsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        allowed_domains = ['https://siddh-personal-website-08c1d1b29863.herokuapp.com/']
        response['X-Frame-Options'] = 'ALLOW-FROM ' + ', '.join(allowed_domains)
        return response