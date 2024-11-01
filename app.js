/*sidebar*/
const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')
  closeAllSubMenus()
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}
document.addEventListener('DOMContentLoaded', () => {
  sidebar.classList.add('close');
  toggleButton.classList.toggle('rotate')
});

/*dangnhap*/
function showRegisterForm() {
  document.getElementById('loginSection').style.display = 'none';
  document.getElementById('registerSection').style.display = 'block';
}

function showLoginForm() {
  document.getElementById('registerSection').style.display = 'none';
  document.getElementById('loginSection').style.display = 'block';
}

function register() {
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (newPassword !== confirmPassword) {
    alert('Mật khẩu xác nhận không khớp!');
    return;
  }

  // Thêm tài khoản mới vào danh sách người dùng (chỉ là ví dụ, không lưu dữ liệu thật)
  users.push({ username: newUsername, password: newPassword });
  alert('Đăng ký thành công! Bạn có thể đăng nhập ngay.');
  showLoginForm(); // Quay lại form đăng nhập
}

function openLoginForm() {
  document.getElementById('loginForm').style.display = 'flex';
}

function closeLoginForm() {
  document.getElementById('loginForm').style.display = 'none';
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value; 
  const user = users.find(user => user.username === username && user.password === password);
  
  if (user) {
      alert("Đăng nhập thành công!");
      closeLoginForm(); 
      document.querySelector('.login-button button').textContent = `Xin chào, ${user.username}`;
  } else {
      alert('Tên đăng nhập hoặc mật khẩu không đúng!');
  }
}
document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const query = document.getElementById('search-query').value.toLowerCase();
  const searchResults = books.filter(book => book.title.toLowerCase().includes(query));
  displaySearchResults(searchResults);
});
const users = [
  { username: "admin", password: "admin123" },
  { username: "user1", password: "password1" }
];
/*logout*/


// Giả lập dữ liệu sách và người dùng
let books = [
  { title: 'Ghost Blade', author: 'Tác giả A', category: 'Truyện tranh', image: 'assets/book1.jpg', available: 3 },
  { title: 'Dandadan', author: 'Tác giả B', category: 'Truyện tranh', image: 'assets/book2.jpg', available: 5 },
  { title: 'One Punch-Man', author: 'Tác giả C', category: 'Truyện tranh', image: 'assets/book3.jpg', available: 7 },
  { title: 'Doraemon', author: 'Tác giả D', category: 'Truyện tranh', image: 'assets/doraemon.jpg', available: 8 },
  { title: 'Harry Potter', author: 'Tác giả F', category: 'Truyện tranh', image: 'assets/hp.jpg', available: 5 },
  { title: 'Conan', author: 'Tác giả G', category: 'Truyện Tranh', image: 'assets/conan.jpg', available: 0 },
  // { title: 'Tiểu thuyết 1', author: 'Tác giả H', category: 'Văn học', image: 'assets/hv.jpg', available: 8 },
  // { title: 'Tự học JavaScript', author: 'Tác giả I', category: 'Kỹ thuật', image: 'assets/javascript.jpg', available: 2 },
  // { title: 'ktlt', author: 'Tác giả K', category: 'Kỹ thuật', image: 'assets/ktlt.jpg', available: 1 },
  // { title: 'Cuộc sống và lập trình', author: 'Tác giả L', category: 'Kỹ thuật', image: 'assets/ls.jpg', available: 21 },
  // { title: 'Tiểu thuyết 2', author: 'Tác giả M', category: 'Văn học', image: 'assets/nmt.jpg', available: 10 },
  // { title: 'Tiểu thuyết 3', author: 'Tác giả N', category: 'Văn học', image: 'assets/nvscc.jpg', available: 2 } ,
  // { title: 'Tiếng anh chuyên ngành', author: 'Tác giả O', category: 'Ngôn ngữ', image: 'assets/ta.jpg', available: 6 },
  // { title: 'Lập trình Python', author: 'Tác giả P', category: 'Kỹ thuật', image: 'assets/python.jpg', available: 2 },
  // { title: 'Tiểu thuyết 4', author: 'Tác giả Q', category: 'Văn học', image: 'assets/truyen.jpg', available: 2 },
  // { title: 'Tiểu thuyết 5', author: 'Tác giả Z', category: 'Văn học', image: 'assets/tt.jpg', available: 2 },
  // { title: 'Nhà giả kim', author: 'Tác giả Z', category: 'Văn học', image: 'assets/ngk.jpg', available: 2 },
];


// Hiển thị kết quả tìm kiếm
function displaySearchResults(searchResults) {
  const results = document.getElementById('search-results');
  results.innerHTML = ''; 
  if (searchResults.length > 0) {
      searchResults.forEach(book => {
          const li = document.createElement('div');
          li.className = 'book-item';
          li.innerHTML = `
              <img src="${book.image}" alt="${book.title}">
              <div class="book-details">
                  <strong>${book.title}</strong> - ${book.author} <br>
                  Thể loại: ${book.category} <br>
                  Còn lại: ${book.available} quyển
              </div>
              <button onclick="borrowBook('${book.title}')">Mượn sách</button>
          `;
          results.appendChild(li);
      });
  } else {
      results.innerHTML = '<p>Không tìm thấy sách nào</p>';
  }
}
// Xử lý mượn sách
function borrowBook(bookTitle) {
  let book = books.find(b => b.title === bookTitle);
  if (book && book.available > 0) {
      book.available--;
      alert(`Bạn đã mượn sách: ${book.title}`);
      displaySearchResults(books.filter(b => b.available > 0));
  } else if (book) {
      alert(`Sách ${book.title} đã hết!`);
  }
}
// Hàm hiển thị tất cả sách
function showAllBooks() {
  displaySearchResults(books);
}
