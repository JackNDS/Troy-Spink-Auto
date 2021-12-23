    const list = document.querySelectorAll('.list');


    function activeLink(){
      list.forEach((item) =>
      item.classList.remove('active'));
      this.classList.add('active')
    }

    list.forEach((item) => 
    item.addEventListener('click', activeLink));

    const counters = document.querySelectorAll('.counter');
    const speed = 700;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const inc = target / speed;

            if(count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1)
            } else {
                count.innerText = target;
            }
        }
        updateCount();
    })