function create(type, content, id) {var name;name = document.createElement(type);name.innerHTML = content;name.id = id;name.style.position = "absolute";document.body.innerHTML += name.outerHTML}
