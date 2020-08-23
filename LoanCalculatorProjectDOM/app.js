// Listen for submit
document.getElementById('load-form').addEventListener('submit', function(e){

    //hide results
    document.getElementById('results').style.display = 'none';

    //show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

function calculateResults(){

    const UIAmount = document.getElementById('amount');
    const UIInterest = document.getElementById('interest');
    const UIYears = document.getElementById('years');
    const UIMonthlyAmount = document.getElementById('monthly-amount');
    const UITotalPayment = document.getElementById('total-payment');
    const UITotalInterest = document.getElementById('total-interest');

    const principal = parseFloat( UIAmount.value );
    const calculatedInterest = ( parseFloat(UIInterest.value) / 100 ) / 12;
    const calculatedPayments = parseFloat(UIYears.value) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        UIMonthlyAmount.value = monthly.toFixed(2);
        UITotalPayment.value = (monthly * calculatedPayments).toFixed(2);
        UITotalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    }else{
        showError('Please check your numbers !');
        //console.log('Please check your numbers !');
    }

    function showError(msg){

        document.getElementById('results').style.display = 'none';
        document.getElementById('loading').style.display = 'none';

        const card = document.querySelector('.card');
        const heading = document.querySelector('.heading');

        const errorDiv = document.createElement('div');
        errorDiv.className = 'alert alert-danger';
        errorDiv.appendChild(document.createTextNode(msg));

        card.insertBefore(errorDiv, heading);
        
        setTimeout(clearError, 3000);
    }

    function clearError(){
        document.querySelector('.alert').remove();
    }
}