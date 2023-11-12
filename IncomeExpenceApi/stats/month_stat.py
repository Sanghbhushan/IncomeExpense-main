def filterMonth(df, heading):
            
    dlist = df.to_numpy().tolist()
    
    Res=[]
    total=0
    
    ind = list(df.index.values)
    index = []
    #  converting numpy int64 into python int
    month = ["Jan", "Feb", "Mar", "Api", "May" , "June", "July", "Aug", "Sep", "Oct" ,"Nov", "Dec"]
    for i , j in ind:
    
        index.append(f"{month[j-1]}-{i}")
        
    for i in range(0, len(dlist)):
        yeardict = {}
        a = 0
        for j in dlist[i]:
            
            yeardict[heading[a]] = j
            if a==(len(dlist[i]) -1):
                total+=dlist[i][3]
                avg = dlist[i][3] / dlist[i][4]  # sum / count = avg
                yeardict['avg'] = round(avg,2)

                if i >0:
                    thanprevious = ( (dlist[i][3] - dlist[i-1][3]) / dlist[i][3]) *100  # current sum - preivous sum  / current sum * 100 
                    yeardict['thanPrevious'] = round(thanprevious,2)
            a+=1

        Res.append(yeardict)
    final = {}
    a=0
    for i in Res:
        final[index[a]] = i
        a+=1
    final.update({"total":total, "monthCount":a})
    return final