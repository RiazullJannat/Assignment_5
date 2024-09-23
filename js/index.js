const myBalance = document.getElementById("myBalance");

function addDonation(event) {
    // collection of all possible button for inp and donate. 
    const allElementId={
        noakhaliBtn:{
            name:'Noakhali',
            inpId:'noakhaliInp',
            balanceId:'noakhaliBalance'
            
        },
        feniBtn:{
            name:'Feni',
            inpId:'feniInp',
            balanceId:'feniBalance'
        },
        quotaBtn:{
            name:'Quota movement',
            inpId:'quotaInp',
            balanceId:'quotaBalance'
        }
    }
    // access clicked btn id's
    const clickedBtnId=allElementId[event.target.id];
    if(clickedBtnId){
        const amount=parseFloat(document.getElementById(clickedBtnId.inpId).value);
        const balance=document.getElementById(clickedBtnId.balanceId);
        if(!isNaN(amount) && (amount>0 && amount<= parseFloat(myBalance.innerText))){
            // update main balance
            myBalance.innerText=(parseFloat(myBalance.innerText)-amount).toFixed(2);
            // update donation balance
            balance.innerText=(parseFloat(balance.innerText)+amount).toFixed(2);
            // adding history
            document.getElementById('defaultText').classList.add('hidden');

            // adding current date to history
            const currentDate=new Date();

            const history=document.getElementById('historySection');
            history.innerHTML+=
            `
            <div class="border p-[32px] rounded-[32px] mb-3">
                <h3 class="font-bold text-xl">
                    ${amount}Taka is Donated for famine-2024 at ${clickedBtnId.name} , Bangladesh.
                </h3>
                <p class="text-secondary">${currentDate}</p>
            </div>
            `
            // calling the modal
            document.getElementById('my_modal_5').showModal();

            document.getElementById(clickedBtnId.inpId).value='';
        }
        else{
            document.getElementById(clickedBtnId.inpId).value='';
            window.alert('Enter a valid input!');
            
        }
    }
}

const historyBtn=document.getElementById('historyBtn');
const donateBtn=document.getElementById('donateBtn');

function hideBlock(event) {
    const idName = event.target.id;

    if (idName === 'historyBtn') {
        // Toggle visibility of the history section
        document.getElementById('historySection').classList.remove('hidden');

        document.getElementById('donateSection').classList.add('hidden');

        historyBtn.classList.add('bg-btnBg','text-primary');

        donateBtn.classList.remove('bg-btnBg', 'text-primary')
        
        
    } else if (idName === 'donateBtn') {

        document.getElementById('historySection').classList.add('hidden');

        document.getElementById('donateSection').classList.remove('hidden');

        historyBtn.classList.remove('bg-btnBg','text-primary');

        donateBtn.classList.add('bg-btnBg', 'text-primary')
    }
}

historyBtn.addEventListener('click',hideBlock)
donateBtn.addEventListener('click',hideBlock)