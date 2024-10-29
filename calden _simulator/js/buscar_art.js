
const input1 = document.querySelector('#search');
window.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        document.getElementById('search1').focus();
        if (input1.value == 1) {
            const input2 = document.querySelector('#search1');
            window.addEventListener("keydown", (e) => {
                if (e.keyCode === 13) {
                    if (input2.value == 0) {
                        $('#myModal').modal('show')
                    }
                }
            })
        }
    }
})