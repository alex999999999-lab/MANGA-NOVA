const chapters = ['الفصل 1', 'الفصل 2', 'الفصل 3']; // قائمة الفصول
let current = 0;

function toggleChapterList(){
  document.getElementById('chapter-list').classList.toggle('hidden');
}
function loadChapterList(){
  let ul = document.getElementById('chapterLinks');
  chapters.forEach((ch,i)=>{
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = '#'; a.textContent = ch;
    a.onclick = e => {
      e.preventDefault();
      current = i;
      loadChapter(i);
      toggleChapterList();
    };
    li.appendChild(a);
    ul.appendChild(li);
  });
}
function loadChapter(idx){
  current = idx;
  // تغيير الصفحات حسب الفصول
  // هنا يمكنك برمجة جلب الصفحات ديناميكيا
}
function goToPrevChapter(){
  if(current>0) loadChapter(current-1);
}
function goToNextChapter(){
  if(current<chapters.length-1) loadChapter(current+1);
}
function handleAdClick(e){
  if(e.detail === 2) {
    document.getElementById('adPopup').classList.remove('hidden');
  }
}
function closeAd(){
  document.getElementById('adPopup').classList.add('hidden');
}
function postComment(){
  let text = document.getElementById('commentText').value.trim();
  if(text){
    let div = document.createElement('div'); div.className = 'comment';
    div.textContent = text;
    document.getElementById('commentsList').appendChild(div);
    document.getElementById('commentText').value = '';
  }
}
window.onload = loadChapterList;
