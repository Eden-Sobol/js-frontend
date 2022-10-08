function create(name, type, content, id) {name = document.createElement(type);name.innerHTML = content;name.id = id;name.style.position = "absolute";document.body.innerHTML += name.outerHTML}
