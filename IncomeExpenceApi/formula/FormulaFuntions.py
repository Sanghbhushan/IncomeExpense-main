from rest_framework.response import Response




def cost_of_living(data):
    ch = check(data, ["current year", "base year"])
    if ch==True:
        res=data["current year"]/data["base year"]
        return {"result":round(res,2)}
    else: return ch

def creditcard_interest(data):
    ch = check(data, ["n1","n2","n3"])
    if ch==True:
        res=(data["n1"] * data["n2"] * data["n3"] * 12) /365
        res = res*0.01
        return {"result":round(res,2)}
    else: return ch


def check(data,list):
    data = data.keys()
    req = {}
    for i in range(0, len(list)):

        if list[i] not in data:
            req[ list[i] ] = ["This field is required."]
    if len(req)==0:
        return True
    else: 
        return {"error":req}
           