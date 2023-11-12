
export const FormulaData = [
    {
        formula:"401k",
        name:"401k Calculator ",
        param:"401k_Calculator",
        p:"A 401(k) is a type of account where individuals deposit the amount pre-tax and defer the payment of taxes until withdrawing the same at the time of retirement. 401k calculators can calculate that maturity amount subject to prescribed limits per authority rules.",
        f:"O * (1+i)F*n + I * ( ( 1 + i )F*n– 1 / i )",
        where:[
             "O : is the starting account balance.",
             "i : is the rate of interest.",
             "F : is the frequency of interest is paid.",
             "n : is the number of periods for which 401(k) shall be made.",
             "I : is the periodical fixed amount invested at regular intervals."],
        input:["O","i","F","n","I"]
    },
    {
        formula:"401k_Contribution",
        name:"Contribution Calculator for 401k",
        param:"401k_Contribution",
        p:"A 401(k) Contribution calculator will help one to calculate the contribution that will be made by the individual and the employer contribution as well, depending upon the limits.",
        f:"( S x C ) + { ( S x C)* x E }",
        where:[
             "S : is the Annual Salary.",
             "C : is the contribution of the employee.",
             "E : is the Employer’s contribution.",
                ],
        input:["S", "C", "E"]
    },
    {
        formula:"Additional_Payment",
        name:"Additional Payment Calculator",
        param:"Additional_Payment",
        p:"A 401(k) Contribution calculator will help one to calculate the contribution that will be made by the individual and the employer contribution as well, depending upon the limits.",
        f:"( S x C ) + { ( S x C)* x E }",
        where:[
             "S : is the Annual Salary.",
             "C : is the contribution of the employee.",
             "E : is the Employer’s contribution.",
                ],
        input:["S", "C", "E"]
    },
    {
        formula:"Adjustable_Rate_Mortgage",
        name:"Adjustable Rate Mortgage Calculator ",
        param:"Additional_Payment",
        p:"An Adjustable-rate mortgage calculator is a type wherein the user can calculate the periodical installment amount wherein interest rate changes after fixed intervals throughout the borrowing period.",
        f:"[P x R x (1+R)^N]/[(1+R)^N-1]",
        where:[
             "P : is the loan amount",
             "R : is the rate of interest per annum",
             "N : is the number of period or frequency wherein loan amount is to be paid",
                ],
        input:["P", "R", "N"]
    },
    {
        formula:"Annuity_Calculator",
        param:"Annuity_Calculator",
        name:"Annuity Calculator ",
        p:"An annuity calculator can calculate the series of regular payments to be received in the future, either at the end or the beginning of the period. The one to be received at the beginning of the period is called an annuity due, and the one received at the end of the period is known as an ordinary period.",
        f:"r * PVADue / [ {1 – (1+r)-n} * (1+r) ]",
       
        where:[
            "PVADue : is the Present Value of an annuity due",
            "r : is the rate of interest per annum",
            "n : is the number of period or frequency wherein annuity will be received" 
        ],
        input:["PVADue", "r", "n"]
    },
    {
        formula:"Debt_Payoff_Calculator",
        param:"Debt Payoff Calculator",
        name:"Debt Payoff Calculator",
        p:"A debt Payoff calculator is a type wherein the borrower wishes to consolidate the outstanding loans and try to pay them off quickly to reduce the interest burden and excess amount outflow.",
        f:"PV = L * (1 – (1+r)-n / r)",
       
        where:[
            "PV : is the present value of Outstanding Balance",
            "L : is the existing Payment",
            "r : is the rate of interest",
            "n : is the frequency of payments" 
        ],
        input:["PV","L", "r", "n"]
    },
    {
        formula:"auto_loan_calculator",
        name:"Auto Loan Calculator ",
        f:"[L x r x (1+r)n] / [(1+r)n-1]",
        p:"An Auto Loan calculator helps you understand the periodic cash flow outflows in the form of equal installments for your Auto Loans.",
        where:[
            "L : is the loan amount",
            "r : is the rate of interest per annum",
            "n : is the number of period or frequency wherein loan amount is to be paid" ,
        ],
        input:["L", "r", "n"]
    },
    {
        formula:"auto_refinance_calculator",
        param:"auto_refinance_calculator",
        name:"Auto Refinance Calculator ",
        f:"(P * R * (1+R)N*F )/ ((1+R)N*F-1)",
        p:"An Auto Loan calculator helps you understand the periodic cash flow outflows in the form of equal installments for your Auto Loans.",
        where:[
            "P : is the outstanding loan balance",
            "R : is the new rate of interest",
            "N : is the number of periods for which the existing loan will continue",
            "F : is the frequency with which the loan shall be repaid i.e. annually, semi-annually, monthly, etc." 
        ],
        input:["P", "R", "N", "F"]
        
    },
    {
        formula:"Balloon Mortgage Calculator",
        param:"Balloon_Mortgage_Calculator",
        f:"PV x (1+r)n – P x [(1+r)n – 1 / r]",
        name:"Balloon Mortgage Calculator ",
        p:"The Balloon Mortgage calculator is used to calculate the amount of balloon balance due at the end of the term of the loan. The formula to calculate a balloon balance is similar to that used to calculate the outstanding balance on a mortgage loan.",
        where:[
            " PV: is the present value of Original Balance",
            " P : is the Payment",
            " r : is the rate of interest",
            " n : is the frequency of payments"
        ],
        input:["PV","P", "R", "N", "F"]
    },
    {
        formula:"Boat_Loan_Calculator ",
        param:"Boat_Loan_Calculator ",
        name:"Boat Loan Calculator ",
        f:"(L * r *(1+r)n*F )/ ((1+r)n*F-1)",
        p:"A Boat Loan is similar to a vehicle loan wherein the purchaser can make a down payment and pay the rest of the amount through a loan, and this calculator will exactly let you know the amount of installment to be paid by the purchaser.",
        where:[
            " L : is the Amount borrowed.",
            " r : is the interest rate per annum.",
            " n : is the number of periods for a loan will be outstanding.",
            " F : is the frequency wherein the loan amount is to be repaid."
        ],
        input:["L", "r", "n" ,"F"]
    },
    {
        formula:"401k_contribution",
        name:"Business Loan Calculator ",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"CD Interest Calculator ",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"College Savings Calculator ",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Compound Savings Calculator ",
        data:""
    },
    {
        formula:"cost_of_living",
        name:"Cost of Living Calculator ",
        param:"cost_of_living",
        p:"The cost of Living Calculator is meant to compare the cost of the goods or, in other words, the expenses an average individual will expect to incur to acquire shelter, food, transportation, healthcare, energy, education, clothing, entertainment, and childcare in various regions.",
        f:"Prices in Current year/ Prices in Base year",
        where:[
             "current year : Price in current year",
             "base year : Price in Base year",
        ],
        input:["current year","base year"]
    
    },
    {
        formula:"creditcard_interest",
        name:"Credit Card Interest Calculator",
        param:"creditcard_interest",
        p:"A Credit Card Interest calculator can calculate the amount of interest that shall be levied when the credit card holder repays only the minimum or partial amount or doesn’t pay the full amount due.",
        f:"D * A * I * 12 / 365",
        where:[
             "D : is the number of days that are counted from the date of purchase.",
             "A : is the total outstanding amount.",
             "I : is the interest rate per month.",
        ],
        input:["D","A", "I"]
    },
    {
        formula:"_401k_contribution",
        name:"Credit Card Minimum Payment Calculator",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Debt Consolidation Calculator ",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Debt Payoff Calculator ",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Fixed Deposit Calculator ",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Hourly Paycheck Calculator ",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Investment Calculator ",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Life Expectancy Calculator",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Line of Credit Calculator ",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Loan Calculator (Personal and Educational) ",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Loan Comparison Calculator ",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Loan Prequalification Calculator ",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Loan Repayment Calculator",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Mortgage Calculator",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Mortgage Calculator with Taxes and Insurance ",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Mortgage Points Calculator",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Pension Calculator ",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Refinance Calculator  ",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Required Minimum Distribution Calculator",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Retirement Income Calculator",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Roth IRA Calculator ",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Savings Calculator",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Simple Savings Calculator",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Total Loan Cost Calculator",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Traditional IRA Calculator",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"Retirement Income Calculator",
        data:""
    },
    {
        formula:"401k_contribution",
        name:"VA Loan Calculator",
        data:""
    }
    
]