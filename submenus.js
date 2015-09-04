$(function() {
  var submenus = {
    
    See_my_profile : ['/u' + _userdata.user_id, 0],
    Edit_profile : ['/profile?mode=editprofile&page_profil=preferences', 0],
    'Separator 1' : ['|', 0],
    
    All_Topics : ['/sta/' + _userdata.username, 0],
    All_Messages : ['/spa/' + _userdata.username, 0],
    js_topics_followed : ['/search?search_id=watchsearch', 0],
    All_PMs : ['/privmsg?folder=inbox', 0],
    'Separator 2' : ['|', 0],
    
    'Reports' : ['/report', 2],
    'Archived Reports' : ['/report?mode=archive', 2],
    'Separator 3' : ['|', 2],
    
    Admin_panel : ['/admin', 1],
    Logout : ['/login?logout=1', 0]

  },
  i, j, li, menu;
  
  $(function() {
    menu = document.getElementById('fa_menulist');
    if (menu) {
      for (li = menu.getElementsByTagName('LI'), i = 0, j = li.length; i < j; i++) li[i].style.display = 'none'; // hide old menu links
      for (i in submenus) {
        li = document.createElement('LI');
        
        // check and correct incorrect data types
        if (submenus[i].constructor != Array) submenus[i] = [];
        if (submenus[i][0] == undefined) submenus[i][0] = '|';
        if (submenus[i][1] == undefined) submenus[i][1] = 0;
        
        // assign element attributes based on the string value
        submenus[i][0] == '|' ? li.className = 'fa_separator' : li.innerHTML = '<a href="' + submenus[i][0] + '" ' + (submenus[i][2] ? 'target="_blank"' : '') + '>' + (_lang[i] ? _lang[i] : i) + '</a>';
        
        // append the new item to the menu based on permissions
        if (_userdata.user_level == 1 || _userdata.user_level >= submenus[i][1] && submenus[i][1] != 1) menu.appendChild(li);
      }
    }
  });
});
