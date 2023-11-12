def filterDay(df, heading):
    dlist = df.to_numpy().tolist()
    total = 0
    dayRes=[]

    
    ind = list(df.index.values)
    index = []

    #  converting numpy int64 into python int
    for y, m, d in ind:
        month = ["Jan", "Feb", "Mar", "Api", "May" , "June", "July", "Aug", "Sep", "Oct" ,"Nov", "Dec"]
        index.append(f"{y}-{month[m]}-{d}")

    for i in range(0, len(dlist)):
        daydict = {}
        a = 0
        for j in dlist[i]:

            daydict[heading[a]] = j
            
            if a==(len(dlist[i]) -1):
                total+=dlist[i][3] 
                avg = dlist[i][3] / dlist[i][4]  # sum / count = avg
                daydict['avg'] = int(avg)
                
                if i >0:
                    thanprevious = ( (dlist[i][3] - dlist[i-1][3]) / dlist[i][3]) *100  # current sum - preivous sum  / current sum * 100 
                    daydict['thanPrevious'] = round(thanprevious,2)
                
            a+=1
        
        dayRes.append(daydict)
    
    final = {}
    a=0
    for i in dayRes:
        final[index[a]] = i
        a+=1
    final.update({"total":total, "dayCount":a})
    return final