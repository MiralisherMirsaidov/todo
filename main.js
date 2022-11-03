let users = $("#users")


// userlarni chizib olish start

makeCard(data)
function makeCard(param, index) {
    users.html("")
    param.map((arr) => {
        let people = `<tr>
        <td>${arr.name}</td>
        <td>${arr.group}</td> 
        <td>${arr.phoneNumber}</td> 
        <td>${arr.email}</td> 
        <td>${arr.groupName}</td> 
        <td><span class="badge ${arr.status ? `badgeSucsess` : `badgeDanger`}">
        ${arr.status && `Active` || `Inactive`}
        </span></td> 
        </tr>
        `
        users.append(people)
    })
}

// userlarni chizib olish end



// search start

function search(text) {
    let result = data.filter((arr) => {
        return arr.name.toLowerCase().includes(text.value.toLowerCase())
    })
    makeCard(result)
}

// search end



// nomerini chiqarish start

function mintable() {
    numberData = []
    if (numberData.length < data.length) {
        for (let i = 0; i < 7; i++) {
            numberData.push(data[i])
        }
        makeCard(numberData)
    }
}

mintable()

function one() {
    numberData = []
    if (numberData.length < data.length) {
        for (let i = 0; i < 7; i++) {
            numberData.push(data[i])
        }
        makeCard(numberData)

    }
}

function two() {
    numberData = []
    if (numberData.length < data.length) {
        for (let i = 8; i < 15; i++) {
            numberData.push(data[i])
        }
        makeCard(numberData)
        
    }
}

function three() {
    numberData = []
    if (numberData.length < data.length) {
        for (let i = 16; i < 23; i++) {
            numberData.push(data[i])
        }
        makeCard(numberData)
    }
}

function four() {
    numberData = []
    if (numberData.length < data.length) {
        for (let i = 24; i < 30; i++) {
            numberData.push(data[i])
        }
        makeCard(numberData)
    }
}

// nomerini chiqarish end



// modalga chizish start

function addUsers() {
    users.html("")

    let ismi = $(".ism").val()
    let sana = $(".sana").val()
    let guruh = $(".guruh").val()
    let tolov = $(".tolov").val()
    let emaili = $(".email").val()
    let erkak = $(".erkak").val()
    let ayol = $(".ayol").val()
    let telefon = $(".telefon").val()

    console.log(ismi);
    console.log(guruh);

    data.push({
        name: ismi,
        data: sana,
        group: guruh,
        pay: tolov,
        email: emaili,
        men: erkak,
        woman: ayol,
        phone:telefon
    })
    drawNewUsers(data)
}

function drawNewUsers(data) {
    users.html("")
    data.map((arr) => {
        let newUsers = `<tr>
        <td>${arr.name}</td>
        <td>${arr.data}</td> 
        <td>${arr.group}</td> 
        <td>${arr.pay}</td> 
        <td>${arr.email}</td> 
        <td>${arr.men}</td> 
        <td>${arr.woman}</td> 
        <td>${arr.phone}</td> 
        </tr>
        `
        users.append(newUsers)
    })
}

// modalga chizish end
