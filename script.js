const phraseRows = [
  ["课室里","May I come in, Ms Shirley?","Ms Shirley，我可以进来吗？","进课室前"],
  ["课室里","May I go to the toilet, please?","请问我可以去厕所吗？","课堂请求"],
  ["课室里","Can you repeat that, please?","请您再重复一次好吗？","听不清楚"],
  ["课室里","I don't understand this part.","我不明白这个部分。","问功课"],
  ["课室里","How do I say this word?","这个字要怎么说？","问发音"],
  ["课室里","What does this sentence mean?","这个句子是什么意思？","问意思"],
  ["课室里","Can I borrow your eraser?","我可以借你的橡皮擦吗？","借文具"],
  ["课室里","I left my book at home.","我把书留在家里了。","忘带书"],
  ["课室里","I have finished my work.","我完成作业了。","完成任务"],
  ["课室里","Can we discuss this in a group?","我们可以小组讨论吗？","小组活动"],
  ["食堂","What are you eating today?","你今天吃什么？","朋友聊天"],
  ["食堂","I want fried noodles, please.","我要炒面，谢谢。","点餐"],
  ["食堂","Can I have less chilli?","可以少辣吗？","点餐要求"],
  ["食堂","How much is this meal?","这份餐多少钱？","问价格"],
  ["食堂","The queue is too long.","队伍太长了。","排队"],
  ["食堂","Let's share this table.","我们一起坐这张桌子吧。","找位"],
  ["食堂","I forgot to bring money.","我忘了带钱。","没带钱"],
  ["食堂","This drink is too sweet.","这杯饮料太甜了。","评价饮料"],
  ["食堂","Can you help me buy a drink?","你可以帮我买一杯饮料吗？","请朋友帮忙"],
  ["食堂","Let's go back to class now.","我们现在回课室吧。","下课结束"],
  ["餐厅","A table for four, please.","请给我们四个人的桌位。","入座"],
  ["餐厅","Can we see the menu, please?","请问可以看菜单吗？","看菜单"],
  ["餐厅","What do you recommend?","你推荐什么？","问推荐"],
  ["餐厅","I would like chicken chop, please.","我要鸡扒，谢谢。","点主餐"],
  ["餐厅","Can I have this without onions?","这个可以不要洋葱吗？","客制要求"],
  ["餐厅","Is this spicy?","这个辣吗？","确认口味"],
  ["餐厅","Can we have some water, please?","请给我们一些水好吗？","请求服务"],
  ["餐厅","The food is delicious.","食物很好吃。","称赞"],
  ["餐厅","Can we have the bill, please?","请问可以买单吗？","结账"],
  ["餐厅","Can we pay separately?","我们可以分开付款吗？","AA 付款"],
  ["买奶茶","Can I have one milk tea, please?","我要一杯奶茶，谢谢。","基本点单"],
  ["买奶茶","I would like less sugar.","我要少糖。","甜度"],
  ["买奶茶","Can I have no ice?","可以不要冰吗？","冰量"],
  ["买奶茶","Can I add pearls?","可以加珍珠吗？","加料"],
  ["买奶茶","What toppings do you have?","你们有什么配料？","问配料"],
  ["买奶茶","What is your best seller?","你们的招牌是什么？","问招牌"],
  ["买奶茶","Can I have it in a large size?","可以要大杯吗？","杯型"],
  ["买奶茶","Is this drink very sweet?","这杯饮料很甜吗？","确认甜度"],
  ["买奶茶","Can I pay by e-wallet?","我可以用电子钱包付款吗？","付款"],
  ["买奶茶","Can I have a straw, please?","请给我吸管好吗？","拿饮料"],
  ["买日用品","Where can I find shampoo?","洗发水在哪里？","问位置"],
  ["买日用品","Do you sell toothpaste?","你们有卖牙膏吗？","找商品"],
  ["买日用品","I need a pack of tissues.","我需要一包纸巾。","买纸巾"],
  ["买日用品","Can I have a plastic bag?","可以给我一个塑料袋吗？","结账"],
  ["买日用品","How much is this notebook?","这本笔记本多少钱？","问价格"],
  ["买日用品","Is there a cheaper one?","有便宜一点的吗？","比价"],
  ["买日用品","Do you have this in another colour?","这个有其他颜色吗？","问颜色"],
  ["买日用品","I only need one bottle.","我只需要一瓶。","数量"],
  ["买日用品","Can I get a receipt?","可以给我收据吗？","收据"],
  ["买日用品","I would like to return this item.","我想退这个商品。","退货"],
  ["便利店","Where is the bread section?","面包区在哪里？","找区域"],
  ["便利店","Do you have cold drinks?","你们有冷饮吗？","问饮料"],
  ["便利店","Can you heat this up for me?","可以帮我加热这个吗？","加热食物"],
  ["便利店","I need to top up my phone.","我需要充值手机。","充值"],
  ["便利店","Can I pay at the counter?","我可以在柜台付款吗？","付款"],
  ["便利店","This price is different from the shelf price.","这个价格和货架上的不一样。","价钱不同"],
  ["便利店","Do you have small change?","你有零钱吗？","现金"],
  ["便利店","Can I use Touch 'n Go?","我可以用 Touch 'n Go 吗？","付款方式"],
  ["便利店","Please scan this item again.","请再扫描这个商品。","收银"],
  ["便利店","That's all, thank you.","就这些，谢谢。","结束购物"],
  ["朋友聊天","Are you free after school?","你放学后有空吗？","约朋友"],
  ["朋友聊天","Let's go for milk tea later.","我们等下去买奶茶吧。","邀约"],
  ["朋友聊天","Can you wait for me?","你可以等我一下吗？","请等待"],
  ["朋友聊天","I will be there in five minutes.","我五分钟后到。","迟到通知"],
  ["朋友聊天","Sorry, I can't make it today.","不好意思，我今天去不了。","拒绝邀约"],
  ["朋友聊天","Maybe next time.","下次吧。","回应"],
  ["朋友聊天","Can you send me the homework?","你可以发功课给我吗？","问功课"],
  ["朋友聊天","Don't worry, I can help you.","别担心，我可以帮你。","安慰"],
  ["朋友聊天","That sounds fun.","听起来很好玩。","回应"],
  ["朋友聊天","Let's take a photo together.","我们一起拍张照吧。","拍照"],
  ["交通","Can you pick me up later?","你等下可以来接我吗？","接送"],
  ["交通","I am waiting at the school gate.","我在校门口等。","地点"],
  ["交通","The bus is late today.","今天巴士迟到了。","巴士迟到"],
  ["交通","Which way should we go?","我们应该走哪一条路？","问路线"],
  ["交通","Can you drop me at the mall?","你可以载我到商场下车吗？","下车地点"],
  ["交通","The traffic is very bad.","交通很塞。","塞车"],
  ["交通","I think we missed the stop.","我觉得我们错过站了。","搭车"],
  ["交通","How long will it take?","需要多久？","问时间"],
  ["交通","I am almost there.","我快到了。","通知"],
  ["交通","Please drive safely.","请小心驾驶。","关心"],
  ["家里","I'm home.","我回来了。","回家"],
  ["家里","What's for dinner?","晚餐吃什么？","家庭日常"],
  ["家里","Can I rest for a while?","我可以休息一下吗？","放学后"],
  ["家里","I have tuition tonight.","我今晚有补习。","行程"],
  ["家里","I need to finish my homework first.","我需要先完成作业。","安排时间"],
  ["家里","Can I use the laptop?","我可以用电脑吗？","请求使用"],
  ["家里","Please wake me up at six.","请六点叫醒我。","起床"],
  ["家里","I packed my schoolbag already.","我已经收拾好书包了。","准备上学"],
  ["家里","Can you sign this form?","你可以签这张表格吗？","学校表格"],
  ["家里","Thank you for dinner.","谢谢你的晚餐。","感谢"],
  ["礼貌用语","Excuse me.","不好意思。","打扰别人"],
  ["礼貌用语","Sorry, my mistake.","不好意思，是我的错。","道歉"],
  ["礼貌用语","It's okay. No problem.","没关系，没问题。","回应道歉"],
  ["礼貌用语","Thank you for helping me.","谢谢你帮我。","感谢"],
  ["礼貌用语","You're welcome.","不客气。","回应感谢"],
  ["礼貌用语","Could you speak more slowly?","你可以说慢一点吗？","听不懂"],
  ["礼貌用语","Can you help me, please?","请问你可以帮我吗？","求助"],
  ["礼貌用语","Let me help you.","让我帮你。","主动帮忙"],
  ["礼貌用语","Have a nice day.","祝你有美好的一天。","道别"],
  ["礼貌用语","Take care.","保重。","温暖道别"],
  ["购物中心","Where is the fitting room?","试衣间在哪里？","试衣"],
  ["购物中心","Do you have this in my size?","这个有我的尺码吗？","问尺码"],
  ["购物中心","Can I try this on?","我可以试穿吗？","试穿"],
  ["购物中心","This shirt is too loose for me.","这件衣服对我来说太宽松了。","衣服不合身"],
  ["购物中心","Is this item on sale?","这个商品有折扣吗？","问折扣"],
  ["购物中心","I am just looking, thank you.","我只是看看，谢谢。","婉拒店员"],
  ["购物中心","Where can I pay for this?","我可以在哪里付款？","找柜台"],
  ["购物中心","Can I exchange the size?","我可以更换尺码吗？","换货"],
  ["购物中心","The escalator is over there.","手扶梯在那边。","指路"],
  ["购物中心","Let's meet at the main entrance.","我们在正门见面吧。","约地点"],
  ["诊所药房","I don't feel well today.","我今天不舒服。","说明状况"],
  ["诊所药房","I have a sore throat.","我喉咙痛。","说明症状"],
  ["诊所药房","I have had a fever since yesterday.","我从昨天开始发烧。","说明时间"],
  ["诊所药房","Do I need to see a doctor?","我需要看医生吗？","询问建议"],
  ["诊所药房","How often should I take this medicine?","这个药多久吃一次？","问用药"],
  ["诊所药房","Should I take it after food?","我应该饭后吃吗？","问用药时间"],
  ["诊所药房","I am allergic to this medicine.","我对这个药过敏。","说明过敏"],
  ["诊所药房","Where is the nearest clinic?","最近的诊所在哪里？","找诊所"],
  ["诊所药房","I need a medical certificate.","我需要病假单。","病假单"],
  ["诊所药房","Thank you for your advice.","谢谢你的建议。","感谢"],
  ["图书馆","Where can I find this book?","我在哪里可以找到这本书？","找书"],
  ["图书馆","Can I borrow this book?","我可以借这本书吗？","借书"],
  ["图书馆","When should I return it?","我应该什么时候归还？","还书日期"],
  ["图书馆","I would like to renew this book.","我想续借这本书。","续借"],
  ["图书馆","Is there a quiet place to study?","有安静的地方可以温习吗？","找座位"],
  ["图书馆","Could you keep your voice down?","你可以小声一点吗？","提醒安静"],
  ["图书馆","May I use this computer?","我可以用这台电脑吗？","使用电脑"],
  ["图书馆","I cannot find my library card.","我找不到图书证。","遗失证件"],
  ["图书馆","This book is very useful for my project.","这本书对我的作业很有帮助。","评价资料"],
  ["图书馆","Let's study together after school.","我们放学后一起温习吧。","约温习"],
  ["补习功课","Which subject are you revising?","你在温习哪一科？","问科目"],
  ["补习功课","I need help with this question.","这道题我需要帮忙。","求助"],
  ["补习功课","Can you explain your answer?","你可以解释你的答案吗？","请解释"],
  ["补习功课","Let's compare our answers.","我们对一下答案吧。","检查答案"],
  ["补习功课","I have not finished my notes yet.","我还没完成笔记。","说明进度"],
  ["补习功课","This chapter is quite difficult.","这一章相当难。","表达难度"],
  ["补习功课","We should take a short break.","我们应该休息一下。","提议休息"],
  ["补习功课","The exam is next Monday.","考试在下星期一。","考试日期"],
  ["补习功课","I will revise this topic again tonight.","我今晚会再温习这个课题。","学习计划"],
  ["补习功课","Good luck with your exam!","祝你考试顺利！","鼓励"],
  ["运动活动","Would you like to join our team?","你想加入我们的队伍吗？","邀请"],
  ["运动活动","What time does practice start?","练习几点开始？","问时间"],
  ["运动活动","Please pass me the ball.","请把球传给我。","球场用语"],
  ["运动活动","That was a great shot!","刚才那球很棒！","称赞"],
  ["运动活动","I need to take a break.","我需要休息一下。","休息"],
  ["运动活动","Be careful not to hurt yourself.","小心别让自己受伤。","提醒安全"],
  ["运动活动","Our team played really well.","我们的队伍表现得很好。","赛后评价"],
  ["运动活动","What was the final score?","最后比分是多少？","问比分"],
  ["运动活动","Let's warm up before we start.","开始前先热身吧。","热身"],
  ["运动活动","I practise badminton twice a week.","我每周练两次羽球。","运动习惯"],
  ["电话信息","Can you hear me clearly?","你听得清楚吗？","通话确认"],
  ["电话信息","The line is not very clear.","线路不太清楚。","网络问题"],
  ["电话信息","I will call you back later.","我迟些再打给你。","结束通话"],
  ["电话信息","Could you send me the location?","你可以把地点发给我吗？","要定位"],
  ["电话信息","I have just sent you the file.","我刚把文件发给你了。","传文件"],
  ["电话信息","Sorry, I missed your call.","抱歉，我没接到你的电话。","未接来电"],
  ["电话信息","Please leave me a message.","请给我留言。","留言"],
  ["电话信息","My phone is running out of battery.","我的手机快没电了。","电量不足"],
  ["电话信息","The internet connection is unstable.","网络连接不稳定。","网络问题"],
  ["电话信息","Let me check the group chat.","让我看看群聊。","查看信息"],
  ["旅行酒店","I have a reservation under Shirley.","我用 Shirley 的名字订了房。","办理入住"],
  ["旅行酒店","What time is check-in?","几点可以入住？","问入住时间"],
  ["旅行酒店","Is breakfast included?","有包括早餐吗？","问配套"],
  ["旅行酒店","Could we have an extra towel?","可以多给我们一条毛巾吗？","客房请求"],
  ["旅行酒店","The air conditioner is not working.","空调坏了。","报告问题"],
  ["旅行酒店","How do we get to the train station?","我们要怎样去火车站？","问路线"],
  ["旅行酒店","Could you take a photo for us?","你可以帮我们拍照吗？","请人拍照"],
  ["旅行酒店","What time should we check out?","我们应该几点退房？","问退房时间"],
  ["旅行酒店","Can you keep our luggage for a while?","可以暂时保管我们的行李吗？","寄放行李"],
  ["旅行酒店","We really enjoyed our stay.","我们住得很愉快。","退房评价"],
  ["学校活动","What club did you join?","你参加了什么学会？","问学会"],
  ["学校活动","I am helping with the school event.","我正在帮忙学校活动。","活动帮忙"],
  ["学校活动","Where should we put these chairs?","这些椅子应该放哪里？","布置场地"],
  ["学校活动","The rehearsal starts at three.","彩排三点开始。","彩排时间"],
  ["学校活动","Please remember to wear your uniform.","记得穿校服。","活动提醒"],
  ["学校活动","Who is in charge of this booth?","谁负责这个摊位？","找负责人"],
  ["学校活动","Can I volunteer for this activity?","我可以当这个活动的志工吗？","报名帮忙"],
  ["学校活动","We need to work as a team.","我们需要团队合作。","团队合作"],
  ["学校活动","The performance was amazing.","表演很精彩。","称赞表演"],
  ["学校活动","Thank you for supporting our event.","谢谢你支持我们的活动。","感谢支持"]
];

const categories = ["全部", ...new Set(phraseRows.map(row => row[0]))];
const gameThemes = categories.filter(category => category !== "全部");
let currentCategory = "全部";
let currentGameTheme = gameThemes[0];
let score = 0;
let sceneIndex = 0;
let scrambleAnswer = [];
let scrambleTarget = "";
let speedTimer = null;
let speedLeft = 30;
let speedActive = false;
let listeningRow = phraseRows[0];
let translationRow = phraseRows[1];
let memoryOpen = [];
let memoryLocked = false;
let rescueInterval = null;
let finalRound = 0;
let finalCorrect = 0;
let finalAnswer = "";
let finalLocked = false;

const sceneRounds = [
  ["你在餐厅要看菜单。", "Can we see the menu, please?"],
  ["买奶茶要少糖。", "I would like less sugar."],
  ["课室里听不清楚。", "Can you repeat that, please?"],
  ["买日用品找洗发水。", "Where can I find shampoo?"],
  ["请朋友等你一下。", "Can you wait for me?"],
  ["便利店请店员加热食物。", "Can you heat this up for me?"],
  ["想问这杯饮料会不会很甜。", "Is this drink very sweet?"],
  ["想问可以分开付款吗。", "Can we pay separately?"]
];

const roleplays = [
  ["Customer", "Buy milk tea with less sugar and pearls.", "Can I have one milk tea with less sugar and pearls, please?"],
  ["Student", "Ask Ms Shirley to repeat the sentence.", "Can you repeat that, please?"],
  ["Customer", "Ask where the shampoo is.", "Where can I find shampoo?"],
  ["Friend", "Invite your friend to buy milk tea after school.", "Let's go for milk tea later."],
  ["Customer", "Ask for the bill at a restaurant.", "Can we have the bill, please?"],
  ["Passenger", "Tell your parent you are waiting at the school gate.", "I am waiting at the school gate."],
  ["Patient", "Tell the pharmacist you have a sore throat.", "I have a sore throat."],
  ["Library user", "Ask when you should return a book.", "When should I return it?"],
  ["Team member", "Invite a classmate to join your team.", "Would you like to join our team?"],
  ["Hotel guest", "Ask whether breakfast is included.", "Is breakfast included?"]
];

const rescuePrompts = [
  ["向老师请教一个不会的部分", "Could you explain ...?"],
  ["在商店找不到要买的东西", "Excuse me, where can I find ...?"],
  ["礼貌地表达不同意见", "I understand your point, but I think ..."],
  ["邀请朋友参加学校活动", "Would you like to ...?"],
  ["告诉医生你的症状", "I have ... since ..."],
  ["在餐厅提出特别要求", "Could I have ... without ...?"],
  ["向同学寻求功课帮助", "Could you help me with ...?"],
  ["解释迟到的原因", "I am sorry I am late because ..."]
];

const roleNames = {
  "课室里": "Student", "食堂": "Student", "餐厅": "Customer", "买奶茶": "Customer",
  "买日用品": "Shopper", "便利店": "Customer", "朋友聊天": "Friend", "交通": "Passenger",
  "家里": "Family member", "礼貌用语": "Helpful speaker", "购物中心": "Shopper", "诊所药房": "Patient",
  "图书馆": "Library user", "补习功课": "Study partner", "运动活动": "Team member",
  "电话信息": "Caller", "旅行酒店": "Hotel guest", "学校活动": "Student volunteer"
};

const builderPresets = {
  "课室里": { mission: "向老师或同学提出礼貌请求。", aLabel: "礼貌开头", bLabel: "课堂任务", a: ["May I", "Can I", "Could I"], b: ["come in, Ms Shirley?", "borrow your eraser?", "ask a question, please?"] },
  "食堂": { mission: "在学校食堂清楚地点餐。", aLabel: "点餐开头", bLabel: "食物选择", a: ["Can I have", "I would like", "Could I get"], b: ["fried noodles, please.", "a cold drink, please.", "this meal with less chilli, please."] },
  "餐厅": { mission: "在餐厅点餐或提出要求。", aLabel: "服务开头", bLabel: "餐厅任务", a: ["Could we have", "Can I have", "I would like"], b: ["the menu, please.", "some water, please.", "chicken chop without onions, please."] },
  "买奶茶": { mission: "自由组合饮料、甜度和配料。", aLabel: "饮料开头", bLabel: "饮料组合", a: ["Can I have", "I would like", "Could I get"], b: ["a milk tea with less sugar, please.", "a green tea with no ice, please.", "a large chocolate drink with pearls, please."] },
  "买日用品": { mission: "寻找、比较或购买日用品。", aLabel: "购物开头", bLabel: "购物任务", a: ["Could you show me", "I am looking for", "Do you have"], b: ["a cheaper notebook?", "a pack of tissues.", "this bottle in another colour?"] },
  "便利店": { mission: "在便利店处理常见需要。", aLabel: "请求开头", bLabel: "便利店任务", a: ["Could you", "Can you", "Please"], b: ["heat this up for me?", "help me top up my phone?", "scan this item again."] },
  "朋友聊天": { mission: "邀请朋友或安排见面。", aLabel: "邀请开头", bLabel: "朋友活动", a: ["Would you like to", "Do you want to", "Can we"], b: ["get milk tea after school?", "study together later?", "take a photo together?"] },
  "交通": { mission: "说明地点或请求接送。", aLabel: "请求开头", bLabel: "交通任务", a: ["Could you", "Can you", "Please"], b: ["pick me up after school?", "drop me at the mall?", "wait for me at the school gate."] },
  "家里": { mission: "在家里礼貌请求或安排时间。", aLabel: "请求开头", bLabel: "家庭任务", a: ["Can I", "Could I", "May I"], b: ["rest for a while?", "use the laptop?", "go out after dinner?"] },
  "礼貌用语": { mission: "把普通请求说得更有礼貌。", aLabel: "礼貌开头", bLabel: "请求内容", a: ["Could you", "Can you", "Please"], b: ["help me with this?", "speak more slowly?", "wait for a moment."] },
  "购物中心": { mission: "试穿、询价或更换商品。", aLabel: "购物开头", bLabel: "购物任务", a: ["Can I", "Could I", "May I"], b: ["try this on?", "exchange the size?", "see a cheaper one?"] },
  "诊所药房": { mission: "清楚说明身体症状。", aLabel: "症状开头", bLabel: "身体状况", a: ["I have", "I have had", "I am worried about"], b: ["a sore throat.", "a fever since yesterday.", "this pain in my stomach."] },
  "图书馆": { mission: "借书、续借或使用设备。", aLabel: "礼貌开头", bLabel: "图书馆任务", a: ["Can I", "May I", "Could I"], b: ["borrow this book?", "use this computer?", "renew this book?"] },
  "补习功课": { mission: "和同学一起解决功课问题。", aLabel: "合作开头", bLabel: "学习任务", a: ["Could you", "Can you", "Please"], b: ["explain this answer?", "help me with this question?", "compare your answer with mine."] },
  "运动活动": { mission: "在运动练习中邀请或建议。", aLabel: "团队开头", bLabel: "运动任务", a: ["Let's", "We should", "Can we"], b: ["warm up before we start.", "practise together after school.", "take a short break?"] },
  "电话信息": { mission: "在电话或信息中提出清楚要求。", aLabel: "通讯开头", bLabel: "通讯任务", a: ["Could you", "Can you", "Please"], b: ["send me the location?", "call me back later?", "check the group chat."] },
  "旅行酒店": { mission: "在酒店提出入住相关请求。", aLabel: "酒店开头", bLabel: "住宿任务", a: ["Could we", "Can we", "May we"], b: ["have an extra towel?", "check in now?", "leave our luggage here?"] },
  "学校活动": { mission: "报名、帮忙或参与学校活动。", aLabel: "参与开头", bLabel: "活动任务", a: ["Can I", "Could I", "May I"], b: ["volunteer for this activity?", "help with the school event?", "join the rehearsal?"] }
};

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const voice = new SpeechSynthesisUtterance(text);
  voice.lang = "en-MY";
  voice.rate = .86;
  speechSynthesis.speak(voice);
}

function addScore(points = 1) {
  score += points;
  document.querySelector("#totalScore").textContent = score;
}

function filteredRows() {
  const q = document.querySelector("#searchInput").value.trim().toLowerCase();
  return phraseRows.filter(row => {
    const inCategory = currentCategory === "全部" || row[0] === currentCategory;
    return inCategory && (!q || row.join(" ").toLowerCase().includes(q));
  });
}

function renderCategories() {
  document.querySelector("#categoryRow").innerHTML = categories.map(category => `
    <button class="chip ${category === currentCategory ? "active" : ""}" data-category="${category}">
      ${category}
    </button>
  `).join("");
}

function renderPhrases() {
  const rows = filteredRows();
  document.querySelector("#phraseGrid").innerHTML = rows.map((row, index) => `
    <article class="phrase-card">
      <span class="tag">${row[0]} · ${row[3]}</span>
      <p class="english">${row[1]}</p>
      <p class="chinese">${row[2]}</p>
      <button class="speak-btn" aria-label="听发音" data-speak="${phraseRows.indexOf(row)}">▶</button>
    </article>
  `).join("") || `<article class="phrase-card"><p class="english">No phrases found.</p><p class="chinese">换一个关键词试试看。</p></article>`;
}

function themeRows() {
  return phraseRows.filter(row => row[0] === currentGameTheme);
}

function makeOptions(answer, pool = themeRows()) {
  return [answer, ...pool.map(row => row[1]).filter(line => line !== answer).sort(() => Math.random() - .5).slice(0, 3)]
    .sort(() => Math.random() - .5);
}

function renderSceneGame() {
  const row = themeRows()[sceneIndex % themeRows().length];
  const answer = row[1];
  document.querySelector("#scenePrompt").textContent = `${row[3]}：${row[2]}`;
  document.querySelector("#sceneFeedback").textContent = "";
  document.querySelector("#sceneOptions").innerHTML = makeOptions(answer).map(option => `
    <button class="option-btn" data-answer="${option === answer ? "yes" : "no"}">${option}</button>
  `).join("");
}

function updateOrder() {
  const partA = document.querySelector("#builderPartA").value;
  const partB = document.querySelector("#builderPartB").value;
  let sentence = `${partA} ${partB}`;
  if (["Please", "Let's", "We should"].includes(partA)) sentence = sentence.replace(/\?$/, ".");
  document.querySelector("#builtOrder").textContent = sentence;
}

function renderBuilder() {
  const preset = builderPresets[currentGameTheme];
  document.querySelector("#builderMission").textContent = preset.mission;
  document.querySelector("#builderLabelA").firstChild.textContent = preset.aLabel;
  document.querySelector("#builderLabelB").firstChild.textContent = preset.bLabel;
  document.querySelector("#builderPartA").innerHTML = preset.a.map(option => `<option>${option}</option>`).join("");
  document.querySelector("#builderPartB").innerHTML = preset.b.map(option => `<option>${option}</option>`).join("");
  updateOrder();
}

function newScramble() {
  const shortRows = themeRows().filter(item => item[1].split(" ").length <= 9);
  const row = (shortRows.length ? shortRows : themeRows()).sort(() => Math.random() - .5)[0];
  scrambleTarget = row[1];
  scrambleAnswer = [];
  document.querySelector("#scrambleHint").textContent = row[2];
  document.querySelector("#scrambleFeedback").textContent = "";
  document.querySelector("#answerLine").textContent = "点击单词来拼句子";
  document.querySelector("#wordBank").innerHTML = row[1].replace(/[?.]/g, "").split(" ").sort(() => Math.random() - .5).map(word => `
    <button class="word-btn">${word}</button>
  `).join("");
}

function renderSpeedRound() {
  const row = randomRows(1)[0];
  const answer = row[1];
  document.querySelector("#speedPrompt").textContent = `${row[3]}：${row[2]}`;
  document.querySelector("#speedFeedback").textContent = "";
  document.querySelector("#speedOptions").innerHTML = makeOptions(answer).map(option => `
    <button class="option-btn" data-speed="${option === answer ? "yes" : "no"}">${option}</button>
  `).join("");
}

function startSpeed() {
  clearInterval(speedTimer);
  speedLeft = 30;
  speedActive = true;
  renderSpeedRound();
  document.querySelector("#startSpeed").textContent = "进行中";
  document.querySelector("#timerBar").style.width = "100%";
  speedTimer = setInterval(() => {
    speedLeft -= 1;
    document.querySelector("#timerBar").style.width = `${Math.max(0, speedLeft / 30 * 100)}%`;
    if (speedLeft <= 0) {
      clearInterval(speedTimer);
      speedActive = false;
      document.querySelector("#startSpeed").textContent = "再玩一次";
      document.querySelector("#speedFeedback").textContent = "时间到！看谁分数最高。";
    }
  }, 1000);
}

function spinRole() {
  const row = randomRows(1)[0];
  document.querySelector("#roleA").textContent = roleNames[currentGameTheme];
  document.querySelector("#roleSituation").textContent = `${row[3]}：${row[2]}`;
  document.querySelector("#roleLine").textContent = row[1];
}

function randomRows(count, exclude = null, pool = themeRows()) {
  return pool.filter(row => row !== exclude).sort(() => Math.random() - .5).slice(0, count);
}

function newListening() {
  listeningRow = randomRows(1)[0];
  document.querySelector("#listeningFeedback").textContent = "";
  const options = [listeningRow, ...randomRows(3, listeningRow)].sort(() => Math.random() - .5);
  document.querySelector("#listeningOptions").innerHTML = options.map(row => `
    <button class="option-btn" data-listening="${row === listeningRow ? "yes" : "no"}">${row[2]}</button>
  `).join("");
}

function newTranslation() {
  translationRow = randomRows(1)[0];
  document.querySelector("#translationPrompt").textContent = translationRow[2];
  document.querySelector("#translationFeedback").textContent = "";
  const options = [translationRow, ...randomRows(3, translationRow)].sort(() => Math.random() - .5);
  document.querySelector("#translationOptions").innerHTML = options.map(row => `
    <button class="option-btn" data-translation="${row === translationRow ? "yes" : "no"}">${row[1]}</button>
  `).join("");
}

function newMemoryGame() {
  const rows = randomRows(4);
  const cards = rows.flatMap((row, id) => [
    { id, side: "en", text: row[1] },
    { id, side: "zh", text: row[2] }
  ]).sort(() => Math.random() - .5);
  memoryOpen = [];
  memoryLocked = false;
  document.querySelector("#memoryFeedback").textContent = "配对 0 / 4";
  document.querySelector("#memoryBoard").innerHTML = cards.map(card => `
    <button class="memory-card" data-pair="${card.id}" data-side="${card.side}" aria-label="翻开卡片">
      <span class="memory-back">?</span><span class="memory-text">${card.text}</span>
    </button>
  `).join("");
}

function newRescuePrompt() {
  clearInterval(rescueInterval);
  const row = randomRows(1)[0];
  const words = row[1].replace(/[?.]/g, "").split(" ");
  const starter = `${words.slice(0, Math.min(3, words.length - 1)).join(" ")} ...`;
  document.querySelector("#rescueSituation").textContent = `${row[3]}：${row[2]}`;
  document.querySelector("#rescueStarter").textContent = starter;
  document.querySelector("#rescueTimer").textContent = "20";
  document.querySelector("#rescueFeedback").textContent = "准备好后按开始，大声说完整句子。";
  document.querySelector("#startRescue").textContent = "开始20秒";
}

function startRescue() {
  clearInterval(rescueInterval);
  let time = 20;
  document.querySelector("#rescueTimer").textContent = time;
  document.querySelector("#rescueFeedback").textContent = "Speak! 不要停，尽量完成句子。";
  document.querySelector("#startRescue").textContent = "计时中";
  rescueInterval = setInterval(() => {
    time -= 1;
    document.querySelector("#rescueTimer").textContent = time;
    if (time <= 0) {
      clearInterval(rescueInterval);
      addScore(2);
      document.querySelector("#rescueFeedback").textContent = "完成！同伴给一个赞和一个改进建议。+2分";
      document.querySelector("#startRescue").textContent = "再来一次";
    }
  }, 1000);
}

function renderGameThemeSelector() {
  document.querySelector("#gameTheme").innerHTML = gameThemes.map(theme => `<option value="${theme}">${theme}</option>`).join("");
  document.querySelector("#gameTheme").value = currentGameTheme;
}

function resetThemeGames() {
  clearInterval(speedTimer);
  clearInterval(rescueInterval);
  speedActive = false;
  sceneIndex = 0;
  document.querySelector("#activeGameTheme").textContent = currentGameTheme;
  document.querySelector("#startSpeed").textContent = "开始30秒";
  document.querySelector("#timerBar").style.width = "100%";
  renderSceneGame();
  renderBuilder();
  newScramble();
  renderSpeedRound();
  spinRole();
  newListening();
  newTranslation();
  newMemoryGame();
  newRescuePrompt();
}

function randomiseBuilder() {
  const a = document.querySelector("#builderPartA");
  const b = document.querySelector("#builderPartB");
  a.selectedIndex = Math.floor(Math.random() * a.options.length);
  b.selectedIndex = Math.floor(Math.random() * b.options.length);
  updateOrder();
}

function renderFinalRound() {
  if (finalRound >= 10) {
    const passed = finalCorrect >= 8;
    document.querySelector("#finalPrompt").textContent = passed
      ? "Daily English Star！你已经可以灵活应付不同生活情境。"
      : "挑战完成！再复习错题，下次向 8 分前进。";
    document.querySelector("#finalOptions").innerHTML = "";
    document.querySelector("#finalFeedback").textContent = `最终成绩：${finalCorrect} / 10`;
    document.querySelector("#startFinal").textContent = "再挑战一次";
    return;
  }
  const row = randomRows(1, null, phraseRows)[0];
  finalAnswer = row[1];
  finalLocked = false;
  document.querySelector("#finalPrompt").textContent = `第 ${finalRound + 1} 题 · ${row[0]}｜${row[2]}`;
  document.querySelector("#finalFeedback").textContent = "";
  document.querySelector("#finalProgress").style.width = `${finalRound * 10}%`;
  document.querySelector("#finalOptions").innerHTML = makeOptions(finalAnswer, phraseRows).map(option => `
    <button class="option-btn" data-final="${option === finalAnswer ? "yes" : "no"}">${option}</button>
  `).join("");
}

function startFinalChallenge() {
  finalRound = 0;
  finalCorrect = 0;
  finalLocked = false;
  document.querySelector("#finalScore").textContent = "0";
  document.querySelector("#finalProgress").style.width = "0%";
  document.querySelector("#startFinal").textContent = "重新开始";
  renderFinalRound();
}

document.querySelector("#categoryRow").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  currentCategory = button.dataset.category;
  renderCategories();
  renderPhrases();
});

document.querySelector("#phraseGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-speak]");
  if (!button) return;
  speak(phraseRows[Number(button.dataset.speak)][1]);
});

document.querySelector("#searchInput").addEventListener("input", renderPhrases);

document.querySelectorAll("[data-jump]").forEach(button => {
  button.addEventListener("click", () => document.querySelector(`#${button.dataset.jump}`).scrollIntoView({ behavior: "smooth" }));
});

document.querySelector("#sceneOptions").addEventListener("click", event => {
  const button = event.target.closest("[data-answer]");
  if (!button || button.classList.contains("correct")) return;
  const correct = button.dataset.answer === "yes";
  button.classList.add(correct ? "correct" : "wrong");
  document.querySelector("#sceneFeedback").textContent = correct ? "Correct! 现在大声念一次。" : "Try again. 看关键词。";
  if (correct) {
    addScore(2);
    speak(button.textContent);
  }
});

document.querySelector("#nextScene").addEventListener("click", () => {
  sceneIndex += 1;
  renderSceneGame();
});

document.querySelectorAll("#builderPartA, #builderPartB").forEach(select => select.addEventListener("change", updateOrder));
document.querySelector("#randomBuild").addEventListener("click", randomiseBuilder);
document.querySelector("#speakOrder").addEventListener("click", () => {
  addScore(1);
  speak(document.querySelector("#builtOrder").textContent);
});

document.querySelector("#wordBank").addEventListener("click", event => {
  const button = event.target.closest(".word-btn");
  if (!button || button.classList.contains("used")) return;
  button.classList.add("used");
  scrambleAnswer.push(button.textContent);
  document.querySelector("#answerLine").textContent = scrambleAnswer.join(" ");
});

document.querySelector("#resetScramble").addEventListener("click", newScramble);
document.querySelector("#checkScramble").addEventListener("click", () => {
  const cleaned = scrambleTarget.replace(/[?.]/g, "");
  const correct = scrambleAnswer.join(" ") === cleaned;
  document.querySelector("#scrambleFeedback").textContent = correct ? `Perfect: ${scrambleTarget}` : `答案是：${scrambleTarget}`;
  if (correct) addScore(3);
  speak(scrambleTarget);
});

document.querySelector("#startSpeed").addEventListener("click", startSpeed);
document.querySelector("#speedOptions").addEventListener("click", event => {
  const button = event.target.closest("[data-speed]");
  if (!button || !speedActive) return;
  const correct = button.dataset.speed === "yes";
  if (correct) {
    addScore(1);
    document.querySelector("#speedFeedback").textContent = "Yes! Next!";
    speak(button.textContent);
    renderSpeedRound();
  } else {
    button.classList.add("wrong");
    document.querySelector("#speedFeedback").textContent = "Not this one.";
  }
});

document.querySelector("#spinRole").addEventListener("click", spinRole);
document.querySelector("#speakRole").addEventListener("click", () => {
  addScore(1);
  speak(document.querySelector("#roleLine").textContent);
});

document.querySelector("#playListening").addEventListener("click", () => speak(listeningRow[1]));
document.querySelector("#nextListening").addEventListener("click", newListening);
document.querySelector("#listeningOptions").addEventListener("click", event => {
  const button = event.target.closest("[data-listening]");
  if (!button || button.classList.contains("correct")) return;
  const correct = button.dataset.listening === "yes";
  button.classList.add(correct ? "correct" : "wrong");
  document.querySelector("#listeningFeedback").textContent = correct ? `听对了！${listeningRow[1]}` : "再听一次，留意关键词。";
  if (correct) addScore(2);
});

document.querySelector("#nextTranslation").addEventListener("click", newTranslation);
document.querySelector("#translationOptions").addEventListener("click", event => {
  const button = event.target.closest("[data-translation]");
  if (!button || button.classList.contains("correct")) return;
  const correct = button.dataset.translation === "yes";
  button.classList.add(correct ? "correct" : "wrong");
  document.querySelector("#translationFeedback").textContent = correct ? "Excellent! 大声念一次。" : "还不对，比较句子的关键词。";
  if (correct) {
    addScore(2);
    speak(translationRow[1]);
  }
});

document.querySelector("#memoryBoard").addEventListener("click", event => {
  const card = event.target.closest(".memory-card");
  if (!card || memoryLocked || card.classList.contains("open") || card.classList.contains("matched")) return;
  card.classList.add("open");
  memoryOpen.push(card);
  if (memoryOpen.length < 2) return;
  memoryLocked = true;
  const [first, second] = memoryOpen;
  const matched = first.dataset.pair === second.dataset.pair && first.dataset.side !== second.dataset.side;
  if (matched) {
    first.classList.add("matched");
    second.classList.add("matched");
    memoryOpen = [];
    memoryLocked = false;
    addScore(3);
    const total = document.querySelectorAll(".memory-card.matched").length / 2;
    document.querySelector("#memoryFeedback").textContent = total === 4 ? "全部配对成功！+3分 x 4" : `配对 ${total} / 4`;
  } else {
    setTimeout(() => {
      first.classList.remove("open");
      second.classList.remove("open");
      memoryOpen = [];
      memoryLocked = false;
    }, 800);
  }
});

document.querySelector("#resetMemory").addEventListener("click", newMemoryGame);
document.querySelector("#newRescue").addEventListener("click", newRescuePrompt);
document.querySelector("#startRescue").addEventListener("click", startRescue);

document.querySelector("#gameTheme").addEventListener("change", event => {
  currentGameTheme = event.target.value;
  resetThemeGames();
});

document.querySelector("#startFinal").addEventListener("click", startFinalChallenge);
document.querySelector("#finalOptions").addEventListener("click", event => {
  const button = event.target.closest("[data-final]");
  if (!button || finalLocked) return;
  finalLocked = true;
  const correct = button.dataset.final === "yes";
  button.classList.add(correct ? "correct" : "wrong");
  if (correct) {
    finalCorrect += 1;
    addScore(2);
    document.querySelector("#finalFeedback").textContent = "Correct! +2分";
  } else {
    document.querySelector("#finalFeedback").textContent = `答案：${finalAnswer}`;
  }
  document.querySelector("#finalScore").textContent = finalCorrect;
  finalRound += 1;
  document.querySelector("#finalProgress").style.width = `${finalRound * 10}%`;
  setTimeout(renderFinalRound, 850);
});

renderCategories();
renderPhrases();
renderGameThemeSelector();
resetThemeGames();
