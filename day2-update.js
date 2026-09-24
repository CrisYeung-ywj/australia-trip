// 9月27日：按用户提供的动物园替换版更新。
(() => {
  const day = TRIP.days.find(d => d.id === 'day-2');
  const original = day.rows;
  const move = (time,title,origin,dest,mode,note) => ({time,title,origin,dest,mode,note,kind:'move',ids:[]});
  const stop = (time,title,id,note) => ({time,title,ids:[id],note,kind:'stop'});
  TRIP.photos.taronga = {cn:'塔龙加动物园',en:'Taronga Zoo Sydney',src:'assets/taronga-zoo.jpg',source:'https://www.taronga.org.au/about/newsroom/media-releases/stand-tall-for-world-giraffe-day',credit:'Taronga Zoo 官网',width:710,height:400};
  day.title = '观鲸 · 塔龙加动物园与歌剧院';
  day.assessment = '观鲸后直接前往塔龙加动物园，园内午餐；返城后依次打卡环形码头站、歌剧院和皇家植物园，Opera Bar晚餐。强度偏高，无午休；下雨时动物园缩短至3小时。';
  day.rows = [
    {...original[0],food:'便利店／酒店早餐',note:'先垫肚子，海上可能晃，别吃太饱。'},
    move('07:00–07:20','酒店 → Campbell’s Cove · 步行约18分钟','Little National Hotel Sydney, 26 Clarence Street',"Campbell's Cove Pontoon Sydney",'walking','约1.3公里；07:40开始签到。'),
    {...original[2],time:'07:40–08:00'},
    original[3],
    move('10:00–10:10','观鲸码头 → 环形码头4号码头 · 步行约9分钟',"Campbell's Cove Pontoon Sydney",'Circular Quay Wharf 4','walking','约0.7公里。'),
    move('10:10–10:45','F2渡轮 → 动物园码头 → 238巴士正门','Circular Quay Wharf 4','Taronga Zoo Sydney Main Entrance','transit','渡轮约12分钟，再乘238巴士到Main Entrance；全程约33–36分钟。渡轮刷Opal或Visa/Mastercard；前一晚核对班次。'),
    stop('10:50–12:30','塔龙加动物园 · 上半场','taronga','Main Entrance入园，从上往下：考拉／袋鼠（Nura Diya）→非洲草原。长颈鹿区可拍悉尼港。按文档门票约A$51；Sky Safari停运，坐238巴士上山。考拉合影需另约专属票（文档约A$60），不可触摸；价格以现场为准。'),
    {time:'12:30–13:30',title:'午餐',food:'Forage and Graze／Taronga Food Market',note:'动物园内用餐，选择较少、偏贵；可自带三明治和水。',ids:['taronga'],kind:'meal'},
    stop('13:30–14:50','塔龙加动物园 · 下半场','taronga','虎区 → 大猩猩 → 两爬馆 → 海豹（文档14:00场）→企鹅；走Lower Entrance出园。文档演出：海豹11:00／14:00、飞鸟12:00／15:00，具体以当日园方安排为准。'),
    move('14:50–15:20','动物园下门 → 渡轮返回环形码头','Taronga Zoo Lower Entrance','Circular Quay Wharf 4','transit','Lower Entrance步行至码头乘渡轮，约27分钟。'),
    stop('15:20–15:35','环形码头站 · 海景站台','circular-station','拍歌剧院与大桥同框；站台需刷Opal进出闸，文档估计约A$4。不想付费可在站前高架／广场取景。'),
    move('15:35–15:45','环形码头站 → 歌剧院 · 步行约9分钟','Circular Quay Station Sydney','Sydney Opera House','walking','约0.6公里。'),
    stop('15:45–16:05','悉尼歌剧院 · 前庭与台阶','opera','前庭、台阶与海港快拍20分钟；大桥改在站台、歌剧院和渡轮上拍摄，不上桥步行。'),
    move('16:05–16:15','歌剧院 → 皇家植物园 · 步行约6分钟','Sydney Opera House','Royal Botanic Garden Sydney','walking','约0.4公里。'),
    stop('16:15–16:50','皇家植物园 · 海景步道拍照','garden','园内海景步道拍歌剧院，拍照后离园；按文档17:00闭园，务必16:50前离开。'),
    move('16:50–17:00','皇家植物园 → Opera Bar · 步行约6分钟','Royal Botanic Garden Sydney','Opera Bar Sydney','walking','约0.4公里，返回歌剧院下层露台。'),
    {...original[20],time:'17:00–19:00'},
    original[21]
  ];
})();

