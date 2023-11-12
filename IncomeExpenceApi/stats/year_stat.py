
def filterYear(df, heading):
    ylist = df.to_numpy().tolist()
    
    yearRes=[]

    
    ind = list(df.index.values)
    index = []
    total =0
    #  converting numpy int64 into python int
    for i in ind:
        index.append(int(i))

    for i in range(0, len(ylist)):
        yeardict = {}
        a = 0
        for j in ylist[i]:

            yeardict[heading[a]] = j
            if a==(len(ylist[i]) -1):
                total+=ylist[i][3]
                avg = ylist[i][3] / ylist[i][4]  # sum / count = avg
                yeardict['avg'] = round(avg,2)
                if i >0:
                    thanprevious = ( (ylist[i][3] - ylist[i-1][3]) / ylist[i][3]) *100  # current sum - preivous sum  / current sum * 100 
                    yeardict['thanPrevious'] = round(thanprevious,2)
                    
            a+=1

        yearRes.append(yeardict)
    final = {}
    a=0
    for i in yearRes:
        final[index[a]] = i
        a+=1
    final.update({"total":total, "yearCount":a})
    return final
    

    