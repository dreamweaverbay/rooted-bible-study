/* ==========================================================================
   ROOTED — study content
   --------------------------------------------------------------------------
   Everything the learner reads lives in this file. The app (app.js) only
   displays it. You can edit any wording here without touching the code.

   Text conventions used inside the strings:
     [[words]]   a short quotation from the World English Bible (public domain).
                 It is shown inside quotation marks.
     *words*     italic emphasis.

   Each session has the same five parts:
     read       intro, watchFor (the observation question), optional context
     understand a list of short blocks; "kind" picks the label shown above each
                (text | background | shape | meaning | differ)
     remember   two or three interactions; "type" is one of
                recall | choice | sequence | compare
                Add review: <session number> to mark a look-back question.
     respond    reflect (a question) and practice (one concrete suggestion)
     prayer     a short closing prayer
   ========================================================================== */

window.ROOTED = {
  study: {
    title: "Rooted",
    subtitle: "A Guided Study of Scripture",
    book: "The Gospel of Mark",

    /* The reading link. Change "NKJV" to any version code BibleGateway
       supports (ESV, NIV, CSB, NLT, KJV, WEB ...). */
    translation: "NKJV",
    bibleUrl: "https://www.biblegateway.com/passage/?search={passage}&version={translation}",

    /* Labels shown above each block in the Understand step. */
    labels: {
      text: "In the text",
      background: "Background",
      shape: "How Mark tells it",
      meaning: "Reading it closely",
      differ: "Where readers differ"
    },

    about: [
      {
        heading: "How the study works",
        text: "Six weeks, three sessions a week, about fifteen to twenty minutes each. Every session follows the same five steps: read, understand, remember, respond, pray. Keep your Bible open beside you; the reading itself is the main thing."
      },
      {
        heading: "What the labels mean",
        text: "In the Understand step, *In the text* reports what the passage itself says. *Background* gives history or Old Testament context from outside the passage. *How Mark tells it* points out the way the story is arranged. *Reading it closely* is interpretation, and *Where readers differ* marks questions on which faithful Christians or careful scholars disagree."
      },
      {
        heading: "Translation",
        text: "The reading link opens the New King James Version. Short phrases quoted inside the study come from the World English Bible, a public-domain translation, so the wording may differ slightly from the Bible in your hands."
      },
      {
        heading: "What is not assigned",
        text: "To keep each session a reasonable length, five passages are not assigned: Mark 7:31–8:13, 9:38–50, 10:1–16, 12:18–27 and 16:9–20. Each is summarized at the point where the study passes it, and the question about Mark's ending is explained in the final session. They are well worth reading on your own."
      },
      {
        heading: "About the explanations",
        text: "The explanations summarize widely accepted background and mainstream interpretation in plain language. No commentators are quoted. Treat the background notes as a starting point, and check a study Bible or commentary when a detail matters to you."
      }
    ]
  },

  weeks: [
    { number: 1, title: "The Beginning of the Gospel", range: "Mark 1:1–3:6",
      summary: "Jesus arrives in Galilee with an authority no one can account for." },
    { number: 2, title: "The Secret of the Kingdom", range: "Mark 3:7–5:43",
      summary: "Parables for those with ears to hear, and mighty works that raise one question." },
    { number: 3, title: "Slow to Understand", range: "Mark 6:1–7:30",
      summary: "Rejection at home, bread in the wilderness, and a problem no washing can reach." },
    { number: 4, title: "On the Way", range: "Mark 8:14–10:52",
      summary: "Peter names Jesus the Christ, and Jesus begins to teach what that will cost." },
    { number: 5, title: "The King in His Temple", range: "Mark 11:1–13:37",
      summary: "Jesus enters Jerusalem, confronts its leaders, and speaks of what is coming." },
    { number: 6, title: "The Cross and the Empty Tomb", range: "Mark 14:1–16:8",
      summary: "The story Mark has been telling all along reaches its end, and its beginning." }
  ],

  sessions: []
};

/* ==========================================================================
   WEEK 1 — The Beginning of the Gospel
   ========================================================================== */

ROOTED.sessions.push({
  id: 1, week: 1,
  title: "The Beginning",
  passage: "Mark 1:1–20",
  search: "Mark 1:1-20",
  read: {
    intro: "Mark begins without a manger or a family tree. There is a title, a voice in the wilderness, and Jesus arriving as a grown man. A great deal happens in twenty verses, so read slowly.",
    watchFor: "Several voices speak about Jesus in these verses. Who are they, and what does each one say about him?"
  },
  understand: [
    { kind: "text", text: "Mark's first sentence works as a title for the whole book: [[The beginning of the Good News of Jesus Christ, the Son of God.]] The prophets promised a messenger; John appears in the wilderness, baptizing and announcing someone greater. Jesus is baptized, the Spirit descends, and a voice from heaven calls him [[my beloved Son]]. After forty days of testing in the wilderness he comes into Galilee preaching: [[The time is fulfilled, and God's Kingdom is at hand! Repent, and believe in the Good News.]] Four fishermen leave their nets and follow him." },
    { kind: "background", text: "*Gospel* means good news. In the ancient world the word was used for public announcements such as a victory or a new ruler, and Isaiah used it for the news that God himself was coming to reign (Isaiah 40:9; 52:7). *Christ* is a title and not a surname: it is the Greek form of *Messiah*, meaning anointed one. The quotation in verses 2–3 draws on Malachi 3:1 and Isaiah 40:3, and John's camel hair and leather belt recall the prophet Elijah (2 Kings 1:8)." },
    { kind: "shape", text: "The reader is told at once who Jesus is, in the first verse and again by the voice from heaven. The people inside the story are not told. Much of the tension in Mark comes from watching them work out what we already know. Notice also the pace. *Immediately* is one of Mark's favorite words." },
    { kind: "meaning", text: "The voice at the baptism echoes two Old Testament passages: Psalm 2:7, where God addresses his king as his son, and Isaiah 42:1, where God delights in his servant. Many readers conclude that Jesus is being identified as both king and servant, a pairing the rest of Mark will unfold. And when Jesus says the kingdom of God is *at hand*, he is speaking of God's rule arriving, something that comes near in time and demands a response, more than of a place." }
  ],
  remember: [
    { type: "recall",
      prompt: "Mark's first verse gives Jesus two titles. What are they, and what does the first one mean?",
      answer: "Christ and Son of God. *Christ* is the Greek form of *Messiah*: the anointed one, the king God promised. Everything else in Mark explains what those two titles turn out to mean." },
    { type: "choice",
      prompt: "Jesus announces that the kingdom of God is “at hand.” Which reading fits the passage best?",
      options: [
        { text: "God's reign is arriving with Jesus himself, and it calls for a response.", best: true,
          note: "Jesus ties the announcement to time ([[The time is fulfilled]]) and to a summons: repent and believe." },
        { text: "It is the place believers go when they die.",
          note: "Jesus speaks of the kingdom drawing near in time, here in Galilee. It is something that comes to people, more than somewhere they go." },
        { text: "It is a movement to drive out Rome.",
          note: "Many hoped for exactly that. But the response Jesus asks for is repentance and faith, and the first people he recruits are fishermen." }
      ] },
    { type: "sequence",
      prompt: "Put the opening events of Mark in order.",
      items: [
        "John preaches and baptizes in the wilderness",
        "Jesus is baptized and the voice speaks from heaven",
        "The Spirit drives Jesus into the wilderness to be tested",
        "John is arrested and Jesus begins preaching in Galilee",
        "Four fishermen leave their nets"
      ],
      explain: "Mark moves from preparation (John), to identity (the voice), to testing, to proclamation, to the first followers. Jesus calls people to follow him almost as soon as he opens his mouth." }
  ],
  respond: {
    reflect: "Simon, Andrew, James and John are given no plan and no explanation, only [[Come after me]]. What does their response suggest about what following Jesus is, before it is anything else?",
    practice: "The fishermen were called in the middle of ordinary work. Today, when an interruption comes from a person who needs you, treat it once as a summons and not an obstacle."
  },
  prayer: "Father, you sent your beloved Son into our world with good news. Give me ears for his voice today, in the middle of my ordinary work. Where I need to turn, turn me. Where I need to trust, help me believe. And teach me to follow where he leads. Amen."
});

ROOTED.sessions.push({
  id: 2, week: 1,
  title: "A Day in Capernaum",
  passage: "Mark 1:21–45",
  search: "Mark 1:21-45",
  read: {
    intro: "Mark now slows down to show a single Sabbath in the fishing town of Capernaum, from the synagogue service to the small hours of the next morning, and then a meeting on the road.",
    watchFor: "How do people react to Jesus in each scene, and what exactly are they reacting to?"
  },
  understand: [
    { kind: "text", text: "In the synagogue Jesus teaches [[as having authority, and not as the scribes]]. A man with an unclean spirit cries out that he knows who Jesus is: [[the Holy One of God]]. Jesus silences the spirit and drives it out. He heals Simon's mother-in-law, and after sunset the whole town gathers at the door. Before dawn he goes out alone to pray, and when Simon finds him he says they must move on to other towns to preach, [[because I came out for this reason]]. Then a leper kneels before him. Jesus, [[moved with compassion]], touches him and makes him clean." },
    { kind: "background", text: "Scribes were trained interpreters of the law of Moses, and as far as we know they taught by appealing to earlier teachers and tradition. The crowd waits until sunset because that is when the Sabbath ended and the sick could be carried. *Leprosy* in the Bible covers a range of skin diseases. Leviticus 13–14 required those affected to live apart, treated their touch as making others unclean, and laid out the priest's examination and offering that Jesus tells the man to complete." },
    { kind: "shape", text: "Authority is the thread. It is shown first in what Jesus says, then in what he does, and the crowd's verdict joins the two: [[A new teaching? For with authority he commands even the unclean spirits]]. The chapter ends with a reversal. The leper, who had to live outside, goes back into town. Jesus, because of the man's talk, can no longer enter a town openly and stays out in deserted places." },
    { kind: "meaning", text: "Why does Jesus silence the spirits, and the leper? Mark does not explain yet. Readers have suggested that Jesus did not want his identity announced before people could understand what kind of Messiah he was, and the end of this chapter shows a practical cost when word spreads. It is best to hold the question open, because Mark comes back to it. Notice too what Jesus says he came for. The healings are real acts of compassion, but they travel with the preaching and do not replace it." }
  ],
  remember: [
    { type: "choice",
      prompt: "The people in the synagogue are astonished. According to the passage, at what?",
      options: [
        { text: "His teaching carries its own authority, and even unclean spirits obey it.", best: true,
          note: "That is the crowd's own summary in verse 27. Mark tells us nothing of what Jesus said in the sermon, only how it landed." },
        { text: "He quotes more Scripture than the scribes do.",
          note: "Mark records no quotations at all here. The contrast with the scribes is about authority, not volume." },
        { text: "He heals on the Sabbath.",
          note: "That will become a dispute soon (2:23–3:6), but no one objects in this scene." }
      ] },
    { type: "recall",
      prompt: "After an evening of healing, everyone in town is looking for Jesus. What does he do, and what reason does he give?",
      answer: "He gets up before dawn to pray alone. Then, instead of returning to the crowd, he leaves for the neighboring towns to preach, [[because I came out for this reason]]. Popular demand does not set his direction." },
    { type: "recall", review: 1,
      prompt: "At the baptism, a voice from heaven said who Jesus is. In today's reading, who else knows?",
      answer: "The voice called him [[my beloved Son]] (1:11). Today an unclean spirit calls him [[the Holy One of God]]. So far in Mark, heaven and the demons know who Jesus is. The people are still asking, [[What is this?]]" }
  ],
  respond: {
    reflect: "The leper does not doubt that Jesus can heal him. He doubts whether Jesus wants to. Jesus answers by touching him before he is clean. What does that touch say about how Jesus regards people whom others keep at a distance?",
    practice: "Think of someone who is kept at arm's length in the places you spend time: awkward, unwell, new, or out of favor. Close the distance once this week in a concrete way. Sit beside them, call, or share a meal."
  },
  prayer: "Lord Jesus, you were willing. You touched the one no one else would touch, and your word did what no one else could do. Speak with that same authority into my life, and give me your compassion for the people I would sooner avoid. Amen."
});

ROOTED.sessions.push({
  id: 3, week: 1,
  title: "Five Disputes",
  passage: "Mark 2:1–3:6",
  search: "Mark 2:1-3:6",
  read: {
    intro: "The crowds are enthusiastic, but not everyone is. Mark gathers five scenes in a row in which Jesus is challenged. Read them as a set.",
    watchFor: "In each scene someone objects. What is the objection, and how does Jesus answer it?"
  },
  understand: [
    { kind: "text", text: "Jesus tells a paralyzed man [[your sins are forgiven]], and when scribes object he heals him, so that they may know [[the Son of Man has authority on earth to forgive sins]]. He calls Levi, a tax collector, and eats with people like him: [[I came not to call the righteous, but sinners]]. Asked why his disciples do not fast, he speaks of a bridegroom who will one day be taken away. When his disciples pick grain on the Sabbath he says, [[The Sabbath was made for man, not man for the Sabbath]]. Finally he heals a man's withered hand in the synagogue, and the Pharisees leave to plot his death." },
    { kind: "background", text: "Tax collectors gathered tolls and taxes for the ruling powers and were widely regarded as dishonest and compromised. The Pharisees were a movement devoted to careful observance of the law, including detailed traditions about the Sabbath and ritual purity. The Herodians were supporters of Herod's ruling family; little more is known of them, and they were not natural allies of the Pharisees. *Son of Man* is the way Jesus most often refers to himself. The phrase can mean simply a human being, but Daniel 7:13–14 describes one like a son of man who receives authority from God." },
    { kind: "shape", text: "The five scenes escalate. The opposition begins as unspoken reasoning (2:6) and ends as a plan to kill (3:6). The first and last scenes are healings, and the middle scene, about the bridegroom, contains the first hint in Mark that Jesus will be taken away. Many readers think the arrangement is deliberate, with that hint placed at the center." },
    { kind: "meaning", text: "The scribes' reasoning in the first scene is sound as far as it goes: [[Who can forgive sins but God alone?]] Mark lets the question stand and shows Jesus doing something visible as evidence of an authority that cannot be seen. The reader is left to finish the thought. On the Sabbath, Jesus does not dismiss the day. He claims to be its lord and insists that its purpose is good. There is a bitter irony at the end: on the Sabbath Jesus restores a man, and his opponents use the same day to plan a death." }
  ],
  remember: [
    { type: "choice",
      prompt: "“Which is easier to say?” Jesus asks (2:9). What is the point of his question?",
      options: [
        { text: "Forgiveness cannot be seen and healing can, so he does the visible thing to show his authority for the invisible one.", best: true,
          note: "He says so himself: the healing is done so [[that you may know]] he has authority to forgive." },
        { text: "Healing is the greater act, so it proves more.",
          note: "The scribes assume the reverse. For them forgiveness is the greater claim, because it belongs to God alone." },
        { text: "The man's paralysis was caused by his sins.",
          note: "The passage does not say so. Jesus deals with both the man's sins and his paralysis without explaining one by the other." }
      ] },
    { type: "compare",
      a: { label: "Four friends (2:3–5)", text: "They dig through a roof to get a paralyzed man to Jesus. Jesus sees their faith." },
      b: { label: "The watchers (3:1–2)", text: "They watch to see whether Jesus will heal on the Sabbath, so that they can accuse him." },
      question: "Both groups expect Jesus to heal. What separates them?",
      answer: "The friends act on what they believe for someone else's good. The watchers treat the same power as evidence for a charge. In Mark, faith is more than being convinced that Jesus can act. It is coming to him in trust. Hard hearts can see the same facts and stay unmoved." },
    { type: "recall", review: 2,
      prompt: "In the Capernaum synagogue (1:21–28), what struck people about Jesus' teaching? How does today's reading push that further?",
      answer: "He taught with authority, unlike the scribes. Today that authority reaches further: he claims the right to forgive sins and calls himself lord of the Sabbath. And for the first time it meets organized resistance." }
  ],
  respond: {
    reflect: "Jesus says he came for the sick and not for the healthy (2:17). Who in this passage considers themselves healthy? What does that do to their ability to hear him?",
    practice: "Levi's first act as a follower was to fill his house with people the respectable avoided. Is there a table you could widen this week, with an invitation to someone who would not expect one from you?"
  },
  prayer: "Lord Jesus, you have authority to forgive, and you came for people who know they need it. Keep me from the hardness that watches you from a distance. Forgive my sins, and make my home and my table as open as yours. Amen."
});

/* ==========================================================================
   WEEK 2 — The Secret of the Kingdom
   ========================================================================== */

ROOTED.sessions.push({
  id: 4, week: 2,
  title: "Insiders and Outsiders",
  passage: "Mark 3:7–35",
  search: "Mark 3:7-35",
  read: {
    intro: "The crowds grow so large that Jesus needs a boat to keep from being crushed. In the middle of it he chooses twelve men, and two very different groups come to pass judgment on him.",
    watchFor: "Who is physically close to Jesus in this passage, and who stands outside? Is it who you would expect?"
  },
  understand: [
    { kind: "text", text: "People come from every direction, including Gentile regions. On a mountain Jesus appoints twelve, [[that they might be with him, and that he might send them out to preach]]. Back at the house his own people set out to take charge of him, saying he is out of his mind. Scribes from Jerusalem offer a darker explanation: he drives out demons by the ruler of demons. Jesus answers that a divided kingdom cannot stand and that no one robs a strong man's house without first tying him up. He warns of a sin that will not be forgiven. Then his mother and brothers arrive and stand outside, and he says of those seated around him, [[whoever does the will of God is my brother, my sister, and mother]]." },
    { kind: "background", text: "The number twelve matches the twelve tribes of Israel. Most interpreters think Jesus chose it on purpose, as a sign that he was gathering a renewed people of God around himself. *Beelzebub* (or Beelzebul) was a name for the ruler of the demons; its origin is debated." },
    { kind: "shape", text: "This is the first clear example of a technique Mark uses often. He begins one story (the family sets out, verse 21), interrupts it with another (the scribes, verses 22–30), and then returns to the first (the family arrives, verses 31–35). The two stories comment on each other. Here, the two groups who might be expected to recognize Jesus, his relatives and the religious experts, both misjudge him, though not equally. Meanwhile ordinary people are sitting in a circle around him." },
    { kind: "meaning", text: "Mark tells us why Jesus spoke about an unforgivable sin: because the scribes were saying that he had an unclean spirit (3:30). In context, it means looking at the Holy Spirit's work of setting people free and calling it the work of Satan. Notice that the warning begins with a very wide promise of forgiveness. A long pastoral tradition adds that a person who is anxious about having committed this sin is showing a concern that such hardness does not have. As for the family: Jesus does not reject them, and later he defends the command to honor parents (7:9–13). He is saying where the closest kinship with him is found." },
    { kind: "differ", text: "Christians have understood the unforgivable sin in more than one way: as something possible only for those who saw Jesus' works in person, as a settled and final rejection of the Spirit's witness to Christ, or more broadly. The text itself ties it closely to the scribes' accusation." }
  ],
  remember: [
    { type: "recall",
      prompt: "Jesus appoints the Twelve for two purposes (3:14). What are they, and which comes first?",
      answer: "[[That they might be with him, and that he might send them out to preach]]. Being with him comes before being sent by him." },
    { type: "choice",
      prompt: "Mark places the scribes' accusation inside the story of Jesus' family coming to take him home. What does the arrangement suggest?",
      options: [
        { text: "Those who might be expected to understand Jesus best, by blood or by training, both misread him.", best: true,
          note: "Read together, the two stories show that neither family ties nor expertise guarantees insight. The people who do God's will are the ones sitting around him." },
        { text: "His family agreed with the scribes that he was possessed.",
          note: "The two charges differ. The family thinks he has lost his senses; the scribes say his power is demonic, which is far more serious." },
        { text: "Two unrelated events happened to occur on the same day.",
          note: "Possible in itself, but Mark arranges stories this way repeatedly. The framing invites us to read them side by side." }
      ] },
    { type: "recall", review: 3,
      prompt: "Last session's five disputes ended with a decision by Jesus' opponents (3:6). What was it, and how has the opposition developed today?",
      answer: "The Pharisees and Herodians began plotting to destroy him. Now scribes arrive from Jerusalem with an official explanation. They do not deny that Jesus drives out demons. They dispute where his power comes from." }
  ],
  respond: {
    reflect: "[[Whoever does the will of God is my brother, my sister, and mother.]] Jesus says this while looking at ordinary people seated around him. According to this sentence, what makes someone family to Jesus, and what does it leave out?",
    practice: "Treat one person in your church as family this week in a practical way, the sort of thing you would do for a sister without being asked: a meal, a ride, an errand, a phone call."
  },
  prayer: "Lord Jesus, you called your disciples first of all to be with you. Keep me near you, among those who listen and do the Father's will. Guard me from explaining away what your Spirit is doing, and teach me to treat your people as my own family. Amen."
});

ROOTED.sessions.push({
  id: 5, week: 2,
  title: "Parables of the Kingdom",
  passage: "Mark 4:1–34",
  search: "Mark 4:1-34",
  read: {
    intro: "Until now Mark has told us that Jesus taught, with very little of what he said. Here is the first long stretch of teaching, given from a boat to a crowd on the shore, and all of it is about seed.",
    watchFor: "Listen for the words *hear* and *listen*. How many kinds of hearing does Jesus describe?"
  },
  understand: [
    { kind: "text", text: "A sower scatters seed on a path, on rocky ground, among thorns and on good soil, and only the last bears a crop. In private Jesus tells his followers, [[To you is given the mystery of God's Kingdom, but to those who are outside, all things are done in parables]], and he explains that the seed is the word and the soils are four kinds of hearers. He adds that a lamp is meant for a stand and that what is hidden is meant to come to light. Two more parables follow: seed that grows while the farmer sleeps, [[though he doesn't know how]], and a mustard seed that becomes the largest plant in the garden." },
    { kind: "background", text: "A parable sets one thing beside another so that the hearer has to think. The hard words in verse 12 come from Isaiah 6:9–10, where the prophet is warned that his preaching will meet people who hear without understanding. Mustard seed was proverbially tiny. Birds sheltering in branches recalls Old Testament pictures of a great kingdom as a tree that shelters the nations (Ezekiel 17:23; Daniel 4:12), and many readers hear that echo here." },
    { kind: "shape", text: "The sower comes first for a reason. It is a parable about hearing parables, and Jesus says that anyone who misses this one will struggle with the rest (4:13). The three seed stories share a pattern: the kingdom begins small and hidden and meets resistance, and its outcome is certain and far larger than its start." },
    { kind: "differ", text: "Verses 11–12 are difficult. Some read them as the purpose of the parables: a judgment on hearers who have already hardened themselves, as in Isaiah's day. Others read them as describing the result, or as Scripture's pattern being repeated. On any reading, the context matters. The sayings about the lamp come next, and they say that what is hidden is hidden in order to be revealed. And the people on the inside are simply those who stayed near Jesus and asked." },
    { kind: "meaning", text: "The parable of the growing seed appears only in Mark. The farmer sows and later reaps, but the growth is not his doing and he cannot explain it. The earth produces [[first the blade, then the ear, then the full grain in the ear]]. The kingdom is God's work, and it does not depend on anyone's anxiety." }
  ],
  remember: [
    { type: "recall",
      prompt: "The sower's seed falls in four places. Name them, and what each one stands for.",
      answer: "The path: the word is heard and taken away at once. Rocky ground: received with joy, but with no root, so it fails when trouble or persecution comes. Thorns: choked by worries, the lure of wealth and desires for other things. Good soil: those who hear the word, accept it and bear fruit." },
    { type: "choice",
      prompt: "In the parable of the seed that grows by itself (4:26–29), which point is best supported?",
      options: [
        { text: "The kingdom's growth is God's work and proceeds in ways the sower neither controls nor understands.", best: true,
          note: "The details all point this way: he sleeps, the seed grows, and he [[doesn't know how]]." },
        { text: "People have no part to play in the kingdom.",
          note: "The man does sow, and he does reap. What he cannot do is make the seed grow." },
        { text: "The kingdom advances through steady human effort.",
          note: "The parable stresses the opposite. The farmer's effort is not what produces the growth." }
      ] },
    { type: "recall", review: 4,
      prompt: "Last session ended with Jesus' family standing outside while others sat around him (3:31–35). Which phrase in today's reading picks up that picture?",
      answer: "[[Those who are outside]] (4:11). In both scenes the insiders are simply the people gathered around Jesus, listening and asking. In Mark, being inside is defined by nearness to him, not by background." }
  ],
  respond: {
    reflect: "Jesus names three things that choke the word: [[the cares of this age]], [[the deceitfulness of riches]], and desires for other things. None of them is a dramatic rejection. Why are they so effective at crowding out what a person has heard?",
    practice: "The next time you hear Scripture read or taught this week, tell one person afterward one thing you heard. What is passed on tends to take root."
  },
  prayer: "Father, you are the one who gives the growth. Make my heart good soil for your word. Clear away what crowds it out, give it root that will hold when trouble comes, and let it bear fruit in your time and not mine. Amen."
});

ROOTED.sessions.push({
  id: 6, week: 2,
  title: "Who Then Is This?",
  passage: "Mark 4:35–5:43",
  search: "Mark 4:35-5:43",
  read: {
    intro: "This is one of the longer readings in the study, but it is four vivid stories told back to back, and the narrative carries you along. Read them as a single sequence.",
    watchFor: "Look for fear in each of the four scenes. Who is afraid, of what, and at what point in the story?"
  },
  understand: [
    { kind: "text", text: "A storm swamps the boat while Jesus sleeps. He rebukes the wind and the sea, and the disciples ask, [[Who then is this, that even the wind and the sea obey him?]] On the far shore a man who lives among the tombs, possessed by a multitude of spirits, is set free and sent home to tell [[what great things the Lord has done]]. Back across the lake, Jairus begs Jesus to come to his dying daughter. On the way a woman who has been bleeding for twelve years touches Jesus' clothes and is healed. Word comes that the girl has died. Jesus says, [[Don't be afraid, only believe]], takes the child by the hand, and she gets up." },
    { kind: "background", text: "The far side of the lake was largely Gentile territory, which the herd of pigs confirms, since pigs were unclean for Jews (Leviticus 11:7). Translations differ over the name of the region because the manuscripts do. A Roman legion numbered several thousand soldiers. Under Leviticus 15:25–27 the woman's bleeding made her ritually unclean, along with whatever she touched, and contact with a dead body also made a person unclean (Numbers 19:11). *Talitha cumi* is Aramaic, the everyday language of Galilee. Mark keeps the original words and translates them." },
    { kind: "shape", text: "The woman's story is set inside Jairus's story, in the same way as last week's reading about the family and the scribes. The two are linked by details: twelve years of illness and a girl twelve years old, the word *daughter*, and faith under pressure. A named and prominent man and a nameless, impoverished woman both end up at Jesus' feet. The delay caused by the woman is exactly what tests Jairus." },
    { kind: "meaning", text: "The four scenes show authority over the sea, over demons, over disease and over death, each a harder case than the last. In the Old Testament it is God who stills the sea (Psalm 89:9; 107:28–29). Mark does not spell out the answer to the disciples' question, but he has told us where to look. There is also a reversal. In the law's categories, uncleanness spreads by contact. In these stories contact with Jesus runs the other way: he is not made unclean, and the people he touches are made whole." }
  ],
  remember: [
    { type: "sequence",
      prompt: "Put the four displays of Jesus' authority in the order Mark gives them.",
      items: [
        "The wind and the sea",
        "A legion of unclean spirits",
        "An illness of twelve years",
        "Death itself"
      ],
      explain: "The sequence climbs. It ends with the one thing no human being can undo, and Jesus speaks to the dead girl as if waking a child." },
    { type: "compare",
      a: { label: "Jairus", text: "Named, a ruler of the synagogue. He comes openly and asks on behalf of his daughter." },
      b: { label: "The woman", text: "Unnamed, ruined by doctors' fees, unclean for twelve years. She comes secretly, from behind." },
      question: "They could hardly be more different. What do they share by the end?",
      answer: "Both fall down before Jesus. Both receive a word about faith: [[your faith has made you well]], and [[only believe]]. Mark sets the most prominent and the least prominent person in town side by side and shows the same need and the same welcome." },
    { type: "recall", review: 5,
      prompt: "In the last session Jesus described rocky ground: hearers who receive the word gladly and falter when trouble comes (4:16–17). How do the disciples in the storm look in that light?",
      answer: "They have just been given private explanations of the kingdom, and at the first real danger Jesus asks, [[How is it that you have no faith?]] Mark is not writing them off, since they stay with Jesus. But he is honest that hearing and trusting are different things. This theme will grow." }
  ],
  respond: {
    reflect: "In the boat the disciples ask, [[Teacher, don't you care that we are dying?]] What does the whole passage, from the storm to the instruction to give a little girl something to eat, show about whether he cares, and about how his timing can look from the inside?",
    practice: "The man from the tombs was told to go home and tell his own people what the Lord had done for him. Tell someone close to you one specific thing God has done for you. Say it plainly, without polishing it."
  },
  prayer: "Lord Jesus, the wind and the sea obey you, and death itself lets go at your word. When I am afraid and you seem to be asleep, help me to trust that you care. Teach me to bring my need to you as Jairus and the woman did, and to tell others what you have done. Amen."
});

/* ==========================================================================
   WEEK 3 — Slow to Understand
   ========================================================================== */

ROOTED.sessions.push({
  id: 7, week: 3,
  title: "A Prophet Without Honor",
  passage: "Mark 6:1–29",
  search: "Mark 6:1-29",
  read: {
    intro: "After the wonders of the last reading, Jesus goes home to Nazareth. Then Mark turns to the Twelve, and to a palace where the news about Jesus has stirred a guilty memory.",
    watchFor: "Three audiences hear Jesus or his messengers: his hometown, the villages the Twelve visit, and Herod's court. What does each one do with what it hears?"
  },
  understand: [
    { kind: "text", text: "Nazareth is astonished by Jesus' wisdom and works, and offended: [[Isn't this the carpenter, the son of Mary?]] Jesus replies that a prophet is honored everywhere but at home. [[He could do no mighty work there]] beyond healing a few sick people, and he marvels at their unbelief. He sends the Twelve out in pairs with authority over unclean spirits and almost no provisions, and they preach that people should repent. Herod hears of Jesus and concludes that John the Baptist has come back. Mark then tells how John died: imprisoned for condemning Herod's marriage, protected by a king who feared him and [[heard him gladly]], and finally beheaded because of an oath made at a banquet." },
    { kind: "background", text: "This Herod is Herod Antipas, a son of Herod the Great, who governed Galilee under Rome. He had married Herodias, his brother's wife, which Leviticus 18:16 forbids. The first-century Jewish historian Josephus also records that Antipas executed John, and gives the ruler's fear of John's influence over the people as the motive (Antiquities, book 18). Mark names four brothers of Jesus and mentions sisters. Christian traditions have understood these relatives differently: as younger children of Mary and Joseph, as Joseph's children from an earlier marriage, or as cousins. Mark's point here is that Nazareth was sure it knew exactly who Jesus was." },
    { kind: "shape", text: "Mark again sets one story inside another. The Twelve are sent out (6:7–13), John's death is told (6:14–29), and the Twelve return in the next reading (6:30). John's fate sits in the middle of the mission like a warning about what this message can cost. It also previews what is ahead for Jesus: a righteous man handed over by a ruler who knows better and gives in to pressure, and a body laid in a tomb by disciples." },
    { kind: "meaning", text: "Mark's statement that Jesus *could* do no mighty work in Nazareth is blunt, and he immediately adds that a few were healed. Most interpreters take it to mean that in Mark Jesus' mighty works answer faith and are not performed to force belief on people who have made up their minds, and not that unbelief overpowered him. The people of Nazareth do not deny his works. They cannot accept that someone so familiar could be the source." }
  ],
  remember: [
    { type: "choice",
      prompt: "Why does Nazareth take offense at Jesus?",
      options: [
        { text: "They know his trade and his family, and cannot square his wisdom and works with someone so familiar.", best: true,
          note: "Their questions are all about where he got it. Familiarity has convinced them there is nothing more to learn." },
        { text: "They doubt that the miracles really happened.",
          note: "They speak of the mighty works done by his hands. What they question is the source." },
        { text: "He criticized their synagogue.",
          note: "Mark reports no criticism from Jesus before they take offense. The offense is at him." }
      ] },
    { type: "recall",
      prompt: "Herod knew John was a righteous man, protected him and liked to listen to him. What finally decided John's fate?",
      answer: "A rash oath made in front of dinner guests, and Herod's unwillingness to lose face. He was [[exceedingly sorry]] and gave the order anyway. Mark shows a man who hears the truth gladly and never acts on it, until a moment of pressure decides for him." },
    { type: "recall", review: 5,
      prompt: "Herod “heard John gladly.” Which of the soils in the parable of the sower (4:14–20) does he bring to mind, and why?",
      answer: "Two could be argued. Like the rocky ground, he receives the word with gladness but has no root when it costs him something. Like the thorny ground, the word is choked by other attachments: his marriage, his reputation, his guests. Either way, Herod is what Jesus warned about. Enjoying the word is different from bearing fruit." }
  ],
  respond: {
    reflect: "The people of Nazareth were certain they already knew Jesus. How can long familiarity with him, years of hearing the same stories, become an obstacle to being taught by him?",
    practice: "John told the truth to someone who had power over him. Is there a small truth you have been avoiding because of who is listening? Find a kind way to say it this week."
  },
  prayer: "Lord Jesus, keep me from the familiarity that stops listening. I do not want to hear your word gladly and leave it undone. Give me John's courage to speak what is true, and a faith that welcomes you as you are. Amen."
});

ROOTED.sessions.push({
  id: 8, week: 3,
  title: "Bread in the Wilderness",
  passage: "Mark 6:30–56",
  search: "Mark 6:30-56",
  read: {
    intro: "The Twelve return from their mission, tired, and Jesus takes them away to rest. The rest does not last. What follows includes the one miracle of Jesus' ministry that all four Gospels record.",
    watchFor: "Watch the disciples. What do they propose, what do they do, and how does Mark describe their hearts at the end?"
  },
  understand: [
    { kind: "text", text: "A crowd reaches the quiet place before Jesus does. He has compassion on them, [[because they were like sheep without a shepherd]], and teaches them. When evening comes the disciples want to send the people away, and Jesus says, [[You give them something to eat.]] With five loaves and two fish he feeds five thousand men, and twelve baskets are left over. He sends the disciples ahead by boat and goes up a mountain to pray. In the night he comes to them walking on the sea as they strain against the wind. They are terrified. He says, [[It is I! Don't be afraid]], and the wind drops. Mark adds that [[they hadn't understood about the loaves, but their hearts were hardened]]." },
    { kind: "background", text: "A denarius was roughly a day's wage for a laborer, so two hundred denarii was well over half a year's pay. The fourth watch of the night was the last one, roughly three to six in the morning. *Sheep without a shepherd* is an Old Testament phrase for Israel without a leader. Moses used it when he asked God for a successor (Numbers 27:17), and in Ezekiel 34 God promises to shepherd his people himself. Bread in a deserted place also recalls the manna God gave Israel in the wilderness (Exodus 16)." },
    { kind: "meaning", text: "The words *It is I* can be an ordinary way of saying “It's me.” The same Greek phrase is also how God names himself in the Greek Old Testament: *I am*. Alongside two other details, walking on the sea (Job 9:8 says God alone treads on its waves) and the odd remark that Jesus meant to *pass by* them (the language used when God reveals himself to Moses in Exodus 33:19–22), this leads many interpreters to conclude that Mark is describing a moment in which Jesus reveals who he is. Mark himself does not comment." },
    { kind: "shape", text: "Mark's closing remark is severe. The last hearts he called hard belonged to Jesus' opponents (3:5). He does not say what the disciples should have grasped about the loaves, but the context suggests it: who it is that feeds a multitude in the wilderness. Their hardness is dullness and not hostility. Mark still wants us to feel how serious it is." }
  ],
  remember: [
    { type: "sequence",
      prompt: "Put in order what Jesus does with the bread (6:41).",
      items: [
        "He takes the five loaves and two fish",
        "He looks up to heaven and blesses",
        "He breaks the loaves",
        "He gives them to the disciples",
        "The disciples set them before the people"
      ],
      explain: "Jesus feeds the crowd through the disciples' hands, using what they brought. Keep these actions in mind: taking, blessing, breaking and giving. You will see them again." },
    { type: "recall",
      prompt: "According to Mark, why were the disciples so astonished when Jesus walked on the sea and the wind stopped (6:52)?",
      answer: "[[They hadn't understood about the loaves, but their hearts were hardened.]] Mark connects the two events. If they had grasped who fed five thousand in the wilderness, the sea would not have undone them." },
    { type: "recall", review: 6,
      prompt: "This is the disciples' second crisis in a boat. In the first (4:35–41), what did Jesus do, and what question did they ask?",
      answer: "He rebuked the wind and the sea, and they asked, [[Who then is this, that even the wind and the sea obey him?]] Tonight the question receives a further answer. He comes to them on the sea itself and says, [[It is I]]. They are still not ready to take it in." }
  ],
  respond: {
    reflect: "[[You give them something to eat.]] The disciples count what they have and conclude that it is not enough. What does Jesus do with what they bring him, and what does that suggest about how he uses what his followers actually have?",
    practice: "Jesus looked at the crowd that had interrupted his rest and felt compassion. Give something small and real to a need in front of you this week, such as a meal, an hour or some money, without first working out whether it is enough to matter."
  },
  prayer: "Lord Jesus, good shepherd, you saw the crowd and had compassion. You see me too. Take the little I have and do with it what only you can do. And when you come to me in ways I do not expect, soften my heart to know you. Amen."
});

ROOTED.sessions.push({
  id: 9, week: 3,
  title: "What Defiles",
  passage: "Mark 7:1–30",
  search: "Mark 7:1-30",
  read: {
    intro: "A delegation arrives from Jerusalem with a complaint about how the disciples eat. Jesus' answer goes to the root of what makes a person clean or unclean. Then he crosses a border.",
    watchFor: "Where does Jesus locate the source of uncleanness? And who in this passage understands him best?"
  },
  understand: [
    { kind: "text", text: "Pharisees and scribes ask why Jesus' disciples eat with unwashed hands, against [[the tradition of the elders]]. Jesus answers with Isaiah: [[This people honors me with their lips, but their heart is far from me.]] He gives an example. By declaring money *Corban*, dedicated to God, a man could excuse himself from supporting his parents, and so tradition cancels a commandment. He tells the crowd that nothing going into a person defiles him, and explains to his disciples that evil comes [[from within, out of the hearts of men]]. Then he travels to the region of Tyre, where a Gentile woman begs him to free her daughter. He answers with a saying about children's bread and dogs. She replies, [[Yes, Lord. Yet even the dogs under the table eat the children's crumbs]], and her daughter is healed." },
    { kind: "background", text: "The washing in question is ritual and has nothing to do with hygiene. The written law required priests to wash before their service (Exodus 30:17–21); the tradition of the elders was a body of oral teaching that extended such practices into daily life. Mark stops to explain these customs (7:3–4), which suggests that many of his first readers were Gentiles. Tyre and Sidon were Gentile cities on the coast north of Galilee." },
    { kind: "differ", text: "The last words of verse 19 are translated in two ways. In the NKJV they are part of what Jesus says about digestion. Many other translations treat them as Mark's own comment: by saying this, Jesus declared all foods clean. The difference rests on a small variation among the Greek manuscripts. Either way, Jesus states his main point plainly in verse 15 and again in verses 20–23." },
    { kind: "meaning", text: "Jesus is not setting Scripture against careful obedience. His charge is that tradition has become a way of avoiding what God commanded while looking devout. His deeper claim is that defilement is moral and comes from the heart. The exchange with the woman is jarring, and it should not be smoothed over. Interpreters differ on its tone. What the text shows is that Jesus speaks of the children, Israel, being fed *first*, which implies that others will be fed after. The woman accepts that order and asks only for crumbs. She grasps a parable at once, right after the disciples needed one explained (7:17–18), and Jesus grants her request [[for this saying]]." }
  ],
  remember: [
    { type: "choice",
      prompt: "What is Jesus' charge against the Pharisees' use of tradition?",
      options: [
        { text: "It has become a way of setting aside what God commanded while appearing devout.", best: true,
          note: "The Corban example is exactly this: a religious vow used to escape the command to honor father and mother." },
        { text: "All religious tradition is wrong.",
          note: "His complaint is specific: tradition that cancels a commandment, and honor with the lips while the heart is far away." },
        { text: "Purity does not matter to God.",
          note: "He moves it to where it belongs. Real defilement comes from the heart, and he takes it seriously enough to list it item by item." }
      ] },
    { type: "compare",
      a: { label: "The disciples (7:17–18)", text: "They have been with Jesus from the start. They ask in private for the saying to be explained, and he asks if they too are without understanding." },
      b: { label: "The woman (7:25–29)", text: "A Gentile and a stranger. She hears a hard saying once and answers from inside its own picture." },
      question: "What is Mark showing by placing these two side by side?",
      answer: "Understanding is not guaranteed by nearness or heritage. The outsider sees what the insiders miss: that even crumbs from this table are enough, and that there is bread to spare. Coming straight after the teaching on clean and unclean, her story shows that boundary being crossed in practice." },
    { type: "recall", review: 8,
      prompt: "When Jesus fed the five thousand (6:35–44), how much was left over? How does that detail sit beside the woman's request for crumbs?",
      answer: "Twelve baskets of broken pieces, after everyone had eaten their fill. The woman asks only for what falls from the table. The reader already knows that this table has more than enough." }
  ],
  respond: {
    reflect: "Jesus lists what comes out of the human heart, from evil thoughts to pride and foolishness (7:21–22). Why is it so much easier to manage outward observance than to face that list?",
    practice: "Honoring father and mother is the command Jesus defends here against a pious excuse. Do one concrete thing this week for a parent or an older person in your life, such as a call, a visit or a practical help, especially if you have had a good reason to put it off."
  },
  prayer: "Father, you look at the heart. Forgive me for honoring you with my lips while my heart stays far away. Cleanse what no washing can reach. And give me the faith of the woman who knew that even the crumbs from your table are enough. Amen."
});

/* ==========================================================================
   WEEK 4 — On the Way
   ========================================================================== */

ROOTED.sessions.push({
  id: 10, week: 4,
  title: "Seeing in Stages",
  passage: "Mark 8:14–9:1",
  search: "Mark 8:14-9:1",
  read: {
    context: "Not assigned (7:31–8:13): Jesus heals a deaf man in the Decapolis, feeds a second crowd of four thousand with seven loaves, and refuses the Pharisees' demand for a sign from heaven. Today's reading opens in the boat just afterward.",
    intro: "This is the hinge of Mark's Gospel. The question that has run through every chapter so far is asked out loud and answered, and then everything changes direction.",
    watchFor: "Notice everything in this passage about seeing and not seeing. How is the healing in the middle unlike any other?"
  },
  understand: [
    { kind: "text", text: "In the boat the disciples fret about having no bread, and Jesus asks, [[Having eyes, don't you see? Having ears, don't you hear?]] At Bethsaida he heals a blind man in two steps. After the first touch the man sees people [[like trees walking]]; after the second he sees clearly. On the road near Caesarea Philippi Jesus asks, [[But who do you say that I am?]] Peter answers, [[You are the Christ.]] Jesus at once begins to teach that the Son of Man must suffer, be rejected and killed, and rise after three days. Peter rebukes him, and Jesus rebukes Peter: [[Get behind me, Satan!]] Then he tells everyone that anyone who would follow him must [[deny himself, and take up his cross]]." },
    { kind: "background", text: "Caesarea Philippi lay about twenty-five miles north of the Sea of Galilee, a largely pagan city named in honor of Caesar. For many Jews of the time *the Christ* meant a victorious king, which helps explain Peter's protest. Crucifixion was Rome's punishment for slaves and rebels, and the condemned man carried the crossbeam to the place of execution. To the first hearers, taking up a cross did not suggest life's ordinary burdens. It meant walking out to die." },
    { kind: "shape", text: "The first half of Mark asked *Who is this?* Peter has now answered. From here the question becomes *What kind of Christ?*, and the road leads to Jerusalem. The two-step healing is unique in the Gospels. Mark places it between the disciples' blindness in the boat and Peter's confession, and most interpreters read it as a picture of the disciples. Peter sees truly, but not yet clearly. This whole section of Mark (8:22–10:52) begins and ends with a blind man receiving his sight." },
    { kind: "meaning", text: "Jesus does not refuse the title Peter gives him. He redefines it at once, using *Son of Man* and the word *must*. Peter is called Satan because he voices the temptation to have the kingdom without the cross. The words *behind me* in verse 33 and *after me* in verse 34 translate the same Greek phrase. Peter is being sent back to a disciple's place, which is behind Jesus, following." },
    { kind: "differ", text: "What did Jesus mean by saying that some standing there would see the kingdom of God come with power (9:1)? Suggestions include the transfiguration, which Mark narrates next; the resurrection; the coming of the Spirit and the spread of the gospel; and the fall of Jerusalem in AD 70. Mark's placing of the transfiguration immediately afterward suggests that it is at least a first fulfillment." }
  ],
  remember: [
    { type: "choice",
      prompt: "The blind man at Bethsaida is healed in two stages. Given where Mark places the story, which reading is best supported?",
      options: [
        { text: "It pictures the disciples: beginning to see who Jesus is, but not yet clearly.", best: true,
          note: "It follows Jesus' question about having eyes and not seeing, and comes just before Peter gets the title right and its meaning wrong." },
        { text: "Jesus' power was limited that day.",
          note: "Nothing in Mark suggests this. Elsewhere a word is enough. The unusual method makes us ask what it means." },
        { text: "The man did not have enough faith.",
          note: "Mark says nothing about the man's faith one way or the other." }
      ] },
    { type: "recall",
      prompt: "Straight after Peter says “You are the Christ,” what does Jesus begin to teach, and how does Peter take it?",
      answer: "That the Son of Man must suffer many things, be rejected by the elders, chief priests and scribes, be killed, and after three days rise again. Peter takes him aside and rebukes him. Jesus tells Peter he is thinking in human terms and not God's." },
    { type: "recall", review: 8,
      prompt: "Twice now Mark has used the same word for the disciples' hearts (6:52; 8:17). What is it, and whose hearts did it describe first (3:5)?",
      answer: "Hardened. It was first said of the people in the synagogue who watched Jesus in order to accuse him. Mark applies the opponents' diagnosis to the disciples themselves. Theirs is dullness and not hostility, but he does not soften the word. Sight will have to be given to them." }
  ],
  respond: {
    reflect: "Peter had the right title and the wrong expectations. Where might a person today confess Jesus as the Christ while still expecting him mainly to prevent loss, spare embarrassment or secure success?",
    practice: "Jesus' words about the cross are far larger than small sacrifices, but saying no to yourself for someone else's sake is learned in small things. Do it once this week in a way that costs you something, and tell no one."
  },
  prayer: "Lord Jesus, you are the Christ. Forgive me when I want you without your cross. Touch my eyes again where I see only in part. Put me back in my place behind you, and give me grace to follow where you go. Amen."
});

ROOTED.sessions.push({
  id: 11, week: 4,
  title: "The Mountain and the Valley",
  passage: "Mark 9:2–37",
  search: "Mark 9:2-37",
  read: {
    intro: "Six days after Peter's confession, three disciples are taken up a mountain and shown something they are not allowed to talk about. At the bottom, a failure is waiting for them.",
    watchFor: "Follow the disciples from the mountain to the house in Capernaum. What do they fail to do, fail to understand, and fail to say?"
  },
  understand: [
    { kind: "text", text: "On a high mountain Jesus is transfigured. His clothes shine, and Elijah and Moses appear, talking with him. Peter, frightened, offers to build three shelters. A cloud covers them and a voice says, [[This is my beloved Son. Listen to him.]] Then they see only Jesus. At the foot of the mountain a father has brought his tormented son to the other disciples, who could not help. He says to Jesus, [[if you can do anything]]. Jesus answers that all things are possible for the one who believes, and the father cries, [[I believe. Help my unbelief!]] The boy is healed. Passing through Galilee, Jesus predicts his death and rising a second time. The disciples do not understand. On the road they have been arguing about which of them is the greatest. Jesus sits down, says that whoever wants to be first must be [[last of all, and servant of all]], and takes a child in his arms." },
    { kind: "background", text: "Moses and Elijah are the great figures of the Law and the Prophets, and each met God on a mountain (Exodus 33–34; 1 Kings 19). In Exodus the cloud marks God's presence (Exodus 24:15–16). *Listen to him* echoes Deuteronomy 18:15, where Moses promises a prophet like himself whom the people must heed. Malachi 4:5 said Elijah would come before the day of the Lord; Jesus implies that this has happened in John the Baptist, which Matthew 17:13 states outright. Children in the ancient world were loved but had no social standing. Welcoming one earned a person nothing." },
    { kind: "shape", text: "This is the second time the voice from heaven speaks. At the baptism it addressed Jesus; here it addresses the disciples. A pattern is also forming that will occur three times in this part of Mark: Jesus predicts his death, the disciples show that they have not understood, and Jesus teaches what following him involves. Last session was the first round. This is the second." },
    { kind: "meaning", text: "The command to listen comes within days of Peter's refusal to accept what Jesus said about suffering, so it has a particular edge: listen to *that*. The father's cry shows what faith looks like in Mark. It is not certainty. It is bringing your need to Jesus, including the need for more faith. As for the disciples, they had driven out demons before (6:13). Jesus directs them to prayer, which is dependence on God and not technique." }
  ],
  remember: [
    { type: "compare",
      a: { label: "At the baptism (1:11)", text: "A voice from heaven speaks to Jesus: [[You are my beloved Son]]." },
      b: { label: "On the mountain (9:7)", text: "A voice from the cloud speaks to the disciples: [[This is my beloved Son. Listen to him.]]" },
      question: "What is added the second time, and why does it matter at this point in the story?",
      answer: "The command to listen. It comes days after Peter rejected Jesus' teaching that he must suffer. The disciples have the right title for Jesus. What they need now is to hear what he says about the cross." },
    { type: "recall",
      prompt: "A father says to Jesus, “If you can do anything…” How does Jesus reply, and what does the father cry out?",
      answer: "Jesus turns the phrase around: [[all things are possible to him who believes]]. The father answers, [[I believe. Help my unbelief!]] Jesus acts on a faith that admits how small it is." },
    { type: "sequence", review: 10,
      prompt: "A three-step pattern began in the last session (8:31–38) and repeats today in 9:30–37. Put the steps in order.",
      items: [
        "Jesus predicts his suffering, death and rising",
        "The disciples show they have not understood",
        "Jesus teaches what following him means"
      ],
      explain: "Last time: the prediction, Peter's rebuke, and the call to take up the cross. Today: the prediction, an argument about greatness, and the call to be servant of all. Watch for it once more in the next session." }
  ],
  respond: {
    reflect: "The disciples argue about greatness just after Jesus has spoken of being killed. He does more than correct them. He sits down, redefines greatness and picks up a child. What does his choice of example say about whom his followers ought to notice?",
    practice: "Give unhurried attention this week to someone who can do nothing for your standing: a child, an elderly neighbor, a person who is easy to overlook. Welcome them, in Jesus' phrase, in his name."
  },
  prayer: "Father, you have told us to listen to your beloved Son. Open my ears to all that he says, the hard words as well as the comforting ones. I believe; help my unbelief. And make me willing to be last and to serve. Amen."
});

ROOTED.sessions.push({
  id: 12, week: 4,
  title: "What Do You Want?",
  passage: "Mark 10:17–52",
  search: "Mark 10:17-52",
  read: {
    context: "Not assigned (9:38–10:16): Jesus corrects John for stopping a man outside their group who was using Jesus' name, warns severely against causing others to stumble, answers a question about divorce by pointing to God's purpose in creation, and takes children in his arms, saying that the kingdom belongs to such as these.",
    intro: "Jesus is now on the road up to Jerusalem, walking ahead of disciples who are amazed and afraid. Three encounters along the way show what people want from him.",
    watchFor: "Jesus asks the same question twice in this reading (10:36 and 10:51). Compare the answers he gets."
  },
  understand: [
    { kind: "text", text: "A man runs up, kneels and asks how to inherit eternal life. He says he has kept the commandments since his youth. [[Jesus looking at him loved him]], and told him to sell what he had, give to the poor, and follow. The man [[went away sorrowful, for he was one who had great possessions]]. Jesus says how hard it is for the rich to enter the kingdom, and when the disciples ask who can be saved, he answers, [[With men it is impossible, but not with God]]. He predicts his death a third time, in the greatest detail yet. James and John ask for the seats at his right and left in glory. Jesus teaches that greatness means service, [[for the Son of Man also came not to be served, but to serve, and to give his life as a ransom for many]]. At Jericho a blind beggar, Bartimaeus, cries out for mercy, receives his sight, and follows Jesus [[on the way]]." },
    { kind: "background", text: "Wealth was commonly taken as a sign of God's favor, which is why the disciples are so astonished. The camel and the needle's eye is a deliberate picture of something impossible; the popular claim that it refers to a small gate in Jerusalem has no ancient evidence behind it. In the Old Testament a *cup* often stands for suffering or for God's judgment (Isaiah 51:17). A *ransom* was the price paid to free a slave or a captive. *Son of David* is a royal title for the Messiah, based on God's promise to David in 2 Samuel 7:12–16. Jericho was the last town on the pilgrim road before the climb to Jerusalem." },
    { kind: "shape", text: "This is the third round of the pattern: prediction, misunderstanding, teaching. The section that opened with a blind man healed in two stages closes with a blind man who sees at once and follows. Mark also sets up contrasts. The rich man has much, is asked to leave it, and walks away grieving. Bartimaeus has a cloak, throws it aside and follows." },
    { kind: "meaning", text: "Verse 45 is the clearest statement in Mark of why Jesus dies. His death is an example of service, and the context says so, but *ransom* says more: his life is given to free others. The phrase *for many* probably echoes Isaiah 53:11–12. Christians have explained in different ways how this ransom works, and Mark gives the image without a theory. As for the rich man, Jesus gives this command to one person, and elsewhere his followers keep their homes (1:29; 2:15). But the warning about riches is general and severe, and the disciples are right to feel it. Salvation is beyond human ability and is possible for God." }
  ],
  remember: [
    { type: "compare",
      a: { label: "James and John (10:35–37)", text: "Asked [[What do you want me to do for you?]], they request the seats of honor beside him in his glory." },
      b: { label: "Bartimaeus (10:51)", text: "Asked the identical question, he says, [[Rabboni, that I may see again.]]" },
      question: "Same question, two answers. What does the contrast show?",
      answer: "The disciples who have walked with Jesus ask for rank. The beggar asks for mercy and sight. Bartimaeus knows that he is blind; the disciples do not know that they are, and sight is exactly what they lack in this part of Mark. He then does what a disciple does. He follows Jesus on the road." },
    { type: "choice",
      prompt: "“The Son of Man came not to be served, but to serve, and to give his life as a ransom for many” (10:45). What does this claim about Jesus' death?",
      options: [
        { text: "It has a purpose: his life is given to set others free.", best: true,
          note: "A ransom is a price paid for someone else's release. Jesus presents his death as something done for others that they could not do for themselves." },
        { text: "Its main significance is as a lesson in humility for leaders.",
          note: "It is an example in this context (10:43–44). But the word *ransom* goes beyond example to something accomplished." },
        { text: "It is a tragic end to a life of service.",
          note: "Jesus speaks of it as part of the reason he came, not as an interruption." }
      ] },
    { type: "recall", review: 10,
      prompt: "This section of Mark opened with another blind man (8:22–26). How did that healing differ from Bartimaeus's, and what lies between the two?",
      answer: "At Bethsaida the man saw in two stages: first people like trees walking, then clearly. Bartimaeus sees at once and follows. Between the two healings Jesus predicts his death three times, and each time the disciples fail to see what he means. The two stories frame Mark's teaching on what it is to see Jesus rightly." }
  ],
  respond: {
    reflect: "Jesus looked at the rich man and loved him, and then said the one thing the man could not bear to hear. What does it show about love that Jesus did not lower the cost in order to keep him?",
    practice: "Give something away this week that you will notice is gone, whether money or a possession, to someone who needs it. Do it quietly."
  },
  prayer: "Lord Jesus, Son of David, have mercy on me. You came to serve and to give your life as a ransom for many. Loosen my grip on whatever I hold more tightly than you. Open my eyes, and let me follow you on the way. Amen."
});

/* ==========================================================================
   WEEK 5 — The King in His Temple
   ========================================================================== */

ROOTED.sessions.push({
  id: 13, week: 5,
  title: "The Fig Tree and the Temple",
  passage: "Mark 11:1–33",
  search: "Mark 11:1-33",
  read: {
    intro: "The road ends. Jesus enters Jerusalem at Passover, when the city is full of pilgrims, and goes straight to the temple. From here to the end of the Gospel, Mark covers about a week.",
    watchFor: "Mark splits the story of the fig tree in two and puts the temple in between. What do the tree and the temple have in common?"
  },
  understand: [
    { kind: "text", text: "Jesus rides into Jerusalem on a colt while people spread cloaks and branches and shout, [[Hosanna! Blessed is he who comes in the name of the Lord!]] He looks around the temple and leaves. The next morning he finds a fig tree in leaf with no fruit, [[for it was not the season for figs]], and says that no one will eat from it again. In the temple he drives out the traders and overturns the money changers' tables, teaching, [[My house will be called a house of prayer for all the nations]], but [[you have made it a den of robbers]]. The following morning the tree has withered from the roots. Jesus speaks about faith, prayer and forgiveness. Then the chief priests, scribes and elders demand to know by what authority he acts. He answers with a question about John's baptism that they will not answer." },
    { kind: "background", text: "Riding in on a colt recalls Zechariah 9:9, where Jerusalem's king arrives humble and mounted on a donkey. *Hosanna* comes from Psalm 118:25–26, a psalm sung at the festivals; it means “save us” and had become a shout of praise. The trade in animals and coins served pilgrims who needed sacrifices and the proper currency, and it is generally thought to have taken place in the outer court, the one part of the temple open to Gentiles. The prophets used a fruitless fig tree as a picture of God's people (Jeremiah 8:13; Micah 7:1)." },
    { kind: "shape", text: "Mark frames one story with another again: fig tree, temple, fig tree. This is the one miracle in Mark that destroys something, and the note that figs were out of season shows that Jesus' hunger is not the point. Most interpreters read it as an acted parable, like the symbolic actions of the Old Testament prophets. The tree has leaves and no fruit. The temple has activity and not the prayer of all nations that God wanted. What happens to the tree is a warning of what will happen to the temple." },
    { kind: "meaning", text: "Jesus joins two prophets. Isaiah 56:7 pictured foreigners welcomed in God's house, and Mark is the only Gospel to keep the words *for all the nations*. *Den of robbers* comes from Jeremiah 7:11, a sermon against people who treated the temple as a guarantee of safety while living unjustly. So the charge is wider than commerce. On prayer, verse 24 is not a blank check: the same Jesus will soon pray, [[not what I desire, but what you desire]] (14:36). And his question about John is not an evasion. John pointed to Jesus, so the answer to one question is the answer to the other. The leaders' private reasoning shows them weighing consequences and not truth." }
  ],
  remember: [
    { type: "choice",
      prompt: "Why does Mark wrap the temple scene inside the story of the fig tree?",
      options: [
        { text: "The tree is an acted parable of the temple: full of leaf, without the fruit God looks for, and under judgment.", best: true,
          note: "The tree is cursed before the temple scene and found withered after it. The placement ties its meaning to the temple." },
        { text: "To show that Jesus was hungry and frustrated.",
          note: "Mark's own remark that it was not the season for figs tells us hunger is not the point." },
        { text: "Mainly to teach about the power of prayer.",
          note: "Jesus does draw a lesson about faith and prayer from it. But the framing connects the tree first of all with the temple." }
      ] },
    { type: "recall",
      prompt: "Jesus quotes two prophets in the temple. What was the temple meant to be, and what had it become?",
      answer: "[[A house of prayer for all the nations]] (Isaiah 56:7), and [[a den of robbers]] (Jeremiah 7:11). The place meant to welcome the nations to pray had become a refuge for people who were not living as God required." },
    { type: "recall", review: 3,
      prompt: "“By what authority?” That question has followed Jesus since Galilee. What authority did he claim in Capernaum (2:1–12), and who objected?",
      answer: "Authority on earth to forgive sins. Scribes considered it blasphemy, since only God can forgive. From the first synagogue to the temple the issue is the same: where does his authority come from? In Galilee the scribes asked it in their hearts. In Jerusalem the leaders ask it officially, and will not answer honestly when the question is turned back on them." }
  ],
  respond: {
    reflect: "The fig tree had leaves and the temple had activity. What might the equivalent look like in a church, or in a life: plenty that is visible, and little of what God is actually looking for?",
    practice: "[[Whenever you stand praying, forgive, if you have anything against anyone.]] Before you next pray, name one person you are holding something against. Release it before God, and if it is wise and possible, take one step toward them."
  },
  prayer: "Lord Jesus, you came to your Father's house looking for prayer and found something else. Search me as you searched the temple. Where there are only leaves, give fruit. Teach me to pray with faith and to forgive as I have been forgiven. Amen."
});

ROOTED.sessions.push({
  id: 14, week: 5,
  title: "What Belongs to God",
  passage: "Mark 12:1–17, 28–44",
  search: "Mark 12:1-17; Mark 12:28-44",
  read: {
    context: "This reading passes over 12:18–27, where the Sadducees, who denied the resurrection, pose a riddle about a woman widowed seven times. Jesus replies that they know neither the Scriptures nor the power of God, who is the God of the living.",
    intro: "Jesus is teaching in the temple courts, and group after group comes to test him. He begins with a story his opponents understand all too well.",
    watchFor: "Through the chapter, notice what people give to God or keep back from him: the tenants, the questioners, the scribes, the widow."
  },
  understand: [
    { kind: "text", text: "A man plants a vineyard and leases it to tenants. They beat and kill the servants he sends for his share, and at last he sends [[his beloved son]], whom they kill and throw out. The leaders know the story is aimed at them. Pharisees and Herodians then ask whether it is lawful to pay taxes to Caesar. Jesus asks whose image is on the coin and says, [[Render to Caesar the things that are Caesar's, and to God the things that are God's.]] A scribe asks which commandment is first. Jesus answers with love for God with all one's heart, soul, mind and strength, and love for one's neighbor, and tells the scribe, [[You are not far from God's Kingdom.]] He asks how the Christ can be David's son when David calls him Lord, warns against scribes who [[devour widows' houses]], and watches a poor widow put two small coins into the treasury: [[all that she had to live on]]." },
    { kind: "background", text: "The vineyard comes from Isaiah 5:1–7, where it stands for Israel, and Jesus' details follow Isaiah's closely. The Old Testament often calls the prophets God's servants (Jeremiah 7:25). The tax was paid to Rome in Roman coin and was deeply resented, so the question was a trap: one answer would cost Jesus the crowd, the other would be sedition. A denarius carried the emperor's portrait and titles. Jesus' answer about the first commandment quotes the *Shema* (Deuteronomy 6:4–5), which devout Jews recited daily, and Leviticus 19:18. The widow's coins were the smallest in circulation." },
    { kind: "meaning", text: "The parable is barely veiled. *Beloved son* is what the voice from heaven has twice called Jesus, and he is telling his own story to the people who will carry it out. Note its target. The vineyard is not destroyed; the tenants are replaced. Mark says the leaders saw that it was told against *them*. On the tax: the coin bears Caesar's image, so it can go back to him. Many interpreters hear an unspoken question behind it: what bears God's image? If the answer is human beings (Genesis 1:27), then Caesar's claim is limited and God's claim covers the whole person. And with Psalm 110, Jesus does not deny that the Christ is descended from David. He shows that *son of David* is too small a title." },
    { kind: "differ", text: "Jesus plainly praises the widow: her gift is the greatest because of what it cost. Because he has just condemned scribes who devour widows' houses, and is about to predict the temple's destruction, some interpreters also hear grief in his words for a system that took her last coins. The praise is stated outright. The lament is an inference from the context. The two readings can stand together." }
  ],
  remember: [
    { type: "recall",
      prompt: "In the parable of the tenants, whom does the owner send last, how is he described, and what happens to him?",
      answer: "His one [[beloved son]]. The tenants kill him and throw him out of the vineyard. It is the phrase the voice from heaven used at the baptism and on the mountain. Jesus is publicly telling the story of his own death." },
    { type: "choice",
      prompt: "“Render to Caesar the things that are Caesar's, and to God the things that are God's.” Which reading is best supported?",
      options: [
        { text: "Caesar's claim is real but limited. God's claim is of a different order and covers the whole person.", best: true,
          note: "The coin carries Caesar's image and can go back to him. In the same chapter Jesus says God is to be loved with all the heart, soul, mind and strength." },
        { text: "Life divides into two equal realms, one political and one religious.",
          note: "Jesus does not present the two as equals. The second half of the sentence has no boundary on it." },
        { text: "Jesus is avoiding the question.",
          note: "He answers it: pay the tax. Then he adds a clause no one asked for, and that is where the weight falls." }
      ] },
    { type: "compare", review: 12,
      a: { label: "The rich man (10:17–22)", text: "He has great possessions. Asked to give them away and follow, he leaves grieving." },
      b: { label: "The poor widow (12:41–44)", text: "She has two small coins. She gives both, and no one notices except Jesus." },
      question: "What do these two together show about how Jesus measures giving?",
      answer: "By what is kept back, not by the amount. One had everything and could not part with it. The other had almost nothing and held on to none of it. In both scenes Jesus is watching closely: he looked at the rich man and loved him, and he sat down opposite the treasury to see how people gave." }
  ],
  respond: {
    reflect: "The scribe agreed that love for God and neighbor matters more than any offering, and Jesus told him he was [[not far]] from the kingdom. What might still lie between agreeing with the greatest commandment and entering the kingdom?",
    practice: "Jesus noticed the one giver nobody else saw. This week, notice and thank someone whose small, faithful contribution usually goes unseen, in your church, your workplace or your family."
  },
  prayer: "Father, I bear your image and I belong to you. Forgive me for giving you what is left over. Teach me to love you with all my heart, soul, mind and strength, and my neighbor as myself. Thank you for the beloved Son you sent, and did not spare. Amen."
});

ROOTED.sessions.push({
  id: 15, week: 5,
  title: "Stay Awake",
  passage: "Mark 13:1–37",
  search: "Mark 13:1-37",
  read: {
    intro: "Jesus leaves the temple for the last time. Sitting on the Mount of Olives with the temple in view, he gives the longest speech in Mark. It is a hard chapter, and careful readers disagree about parts of it. Read it through once without stopping over the puzzles.",
    watchFor: "Look for the commands. What does Jesus actually tell his disciples to *do*, as distinct from what he says will happen?"
  },
  understand: [
    { kind: "text", text: "A disciple admires the temple buildings, and Jesus says, [[There will not be left here one stone on another]]. Four disciples ask when this will happen and what the sign will be. Jesus warns of deceivers, wars and disasters, which are only [[the beginning of birth pains]]. His followers will be put on trial and hated, and the gospel must be preached to all nations. He speaks of an [[abomination of desolation]] and tells those in Judea to flee, then of the Son of Man [[coming in clouds with great power and glory]]. He says that this generation will not pass away until these things happen, and that no one knows the day or hour, [[not even the angels in heaven, nor the Son, but only the Father]]. He ends with a householder who goes away and leaves each servant his work: [[What I tell you, I tell all: Watch.]]" },
    { kind: "background", text: "Herod the Great began rebuilding the temple about 20 BC, and the work was still going on. Roman armies destroyed it in AD 70, about forty years after Jesus spoke. *Abomination of desolation* comes from the book of Daniel (9:27; 11:31; 12:11) and had been applied to the pagan desecration of the temple in 167 BC, described in 1 Maccabees 1:54. The prophets used the language of a darkened sun and falling stars for God's judgment on nations within history (Isaiah 13:10, on Babylon) as well as for the last day. The Son of Man coming with clouds is from Daniel 7:13–14." },
    { kind: "differ", text: "This is among the most debated chapters in the Gospels. The disciples ask about the temple, and part of the answer clearly concerns it. But Jesus also speaks of his coming in glory. Some hold that almost everything through verse 31 was fulfilled in the first century, ending with the fall of Jerusalem, and that only the final section looks to Christ's return. Others see the chapter moving back and forth between the two, with Jerusalem's fall as a preview of the end. Others read most of it as still future. Faithful Christians hold each of these views, and every view has to reckon with both verse 30 and verse 32." },
    { kind: "meaning", text: "What is not in doubt is the purpose of the speech. Jesus refuses to give a timetable and gives commands instead: do not be led astray, do not be alarmed, expect opposition, bear witness, endure, stay awake. Christians have usually understood the Son's not knowing the day in connection with his real humanity. Whatever the explanation, its effect here is to rule out setting dates. The speech begins and ends with the same instruction, to watch. Notice also the four night watches named in verse 35. They will come back in the story of Jesus' last night." }
  ],
  remember: [
    { type: "choice",
      prompt: "What is the main thing Jesus wants from his disciples in this speech?",
      options: [
        { text: "Watchful faithfulness: not deceived, not panicked, doing their work until he comes.", best: true,
          note: "The commands carry the weight of the chapter, and the closing parable gives each servant a task." },
        { text: "To work out from the signs when the end will come.",
          note: "He says the day is unknown even to the angels and the Son, and that wars and disasters are not yet the end." },
        { text: "To withdraw from ordinary life and wait.",
          note: "In the parable, watching means staying at your post and doing the work you were given." }
      ] },
    { type: "recall",
      prompt: "What prompted this teaching? What did a disciple admire, and how did Jesus reply?",
      answer: "The great stones and buildings of the temple. Jesus replied, [[There will not be left here one stone on another, which will not be thrown down.]] Four disciples then asked him in private when it would happen and what the sign would be." },
    { type: "recall", review: 13,
      prompt: "Two sessions ago, an acted parable hinted at what Jesus now says outright about the temple. What was it?",
      answer: "The fig tree: in leaf but without fruit, cursed, and found withered from the roots (11:12–21), with the temple scene set in the middle. A fig tree appears again today (13:28), this time as a lesson in recognizing the season." }
  ],
  respond: {
    reflect: "Jesus tells his followers that they will be hated and put on trial, and that the gospel must reach all nations. He promises the Spirit's help and does not promise escape. How should that shape what Christians expect, and how you pray for believers who are under pressure today?",
    practice: "In the parable each servant is given his work, and watching means doing it while the master is away. Choose the ordinary duty in front of you today that feels least significant, and do it as someone who expects his return."
  },
  prayer: "Lord Jesus, heaven and earth will pass away, but your words will not. Keep me from fear when the world shakes, and from the sleep that forgets you are coming. Strengthen your people who suffer for your name. Let me be found awake and at my work. Amen."
});

/* ==========================================================================
   WEEK 6 — The Cross and the Empty Tomb
   ========================================================================== */

ROOTED.sessions.push({
  id: 16, week: 6,
  title: "The Cup",
  passage: "Mark 14:1–42",
  search: "Mark 14:1-42",
  read: {
    intro: "Mark slows almost to a walk. A third of his Gospel is given to Jesus' last week, and these are its final free hours: a dinner in Bethany, the Passover meal, and a garden at night. The reading is long, but do not hurry it.",
    watchFor: "Notice who understands what is about to happen and who does not. How does each person respond to Jesus in these hours?"
  },
  understand: [
    { kind: "text", text: "While the leaders look for a way to arrest Jesus quietly, a woman in Bethany pours a jar of very costly ointment over his head. Some scold her for the waste. Jesus defends her: [[She has done what she could. She has anointed my body beforehand for the burying.]] Judas goes to the chief priests. At the Passover meal Jesus says that one of the Twelve will betray him. He takes bread and says, [[Take, eat. This is my body.]] He gives them a cup: [[This is my blood of the new covenant, which is poured out for many.]] He tells them they will all fall away, and Peter that he will deny him three times. In Gethsemane he is deeply distressed and prays, [[Abba, Father, all things are possible to you. Please remove this cup from me. However, not what I desire, but what you desire.]] Three times he finds Peter, James and John asleep." },
    { kind: "background", text: "Passover remembers Israel's rescue from slavery in Egypt, with a meal of lamb and unleavened bread whose parts were explained as they were eaten (Exodus 12). Three hundred denarii was close to a year's wages. *Blood of the covenant* recalls Exodus 24:8, where blood seals God's covenant with Israel at Sinai, and Jeremiah 31:31–34 promised a new covenant. *Abba* is an Aramaic word for father used within the family. It expresses closeness and trust, though the popular claim that it means “Daddy” goes beyond the evidence. The *cup* is an Old Testament image of suffering and judgment, and Jesus has used it of his death before (10:38)." },
    { kind: "shape", text: "Mark opens with one more framed story: the plot (14:1–2), the anointing (14:3–9), the betrayal (14:10–11). Between leaders who want Jesus dead and a disciple who sells him, a woman whose name we are not given spends a fortune on him. Mark does not say how much she understood, but she is the only person in the chapter who acts as though Jesus is about to die. Many readers also notice that the night ahead follows the four watches Jesus named in 13:35: evening (the supper), the middle of the night (Gethsemane and the arrest), the rooster's crow (Peter's denial), and morning (the handing over to Pilate, 15:1)." },
    { kind: "meaning", text: "At the supper Jesus explains his death before it happens. His body is given and his blood is poured out *for many*, the same words as the ransom saying in 10:45, and it establishes a covenant. In Gethsemane Mark shows real anguish and a real request, followed by real obedience. Jesus prays what he has taught, that all things are possible for God, and submits to the Father's will. The disciples were told to [[watch]], the word that ended the last chapter. They sleep." },
    { kind: "differ", text: "Christians understand in different ways how Christ is present in the bread and the cup, and Mark's brief account does not settle those questions. All agree that the meal proclaims his death as given for others and looks ahead to the kingdom of God." }
  ],
  remember: [
    { type: "recall", review: 8,
      prompt: "At the supper Jesus took bread, blessed it, broke it and gave it. Where have you seen those four actions before in Mark?",
      answer: "At the feeding of the five thousand (6:41). There he fed a crowd in the wilderness. Here he says the bread is his body. The earlier meal prepared for this one, and Mark told us then that the disciples [[hadn't understood about the loaves]]." },
    { type: "choice",
      prompt: "In Gethsemane Jesus asks for the cup to be removed, and then says, “not what I desire, but what you desire.” What does the prayer show?",
      options: [
        { text: "A real human dread of what is coming, honestly spoken, and a real surrender to the Father's will.", best: true,
          note: "Mark's language is strong: greatly troubled, sorrowful even to death. The request and the surrender are both genuine." },
        { text: "Jesus was unsure whether the Father was able to deliver him.",
          note: "He begins by saying that all things are possible for the Father. The question is the Father's will, not his ability." },
        { text: "His distress was only for show.",
          note: "Nothing in the text suggests it. Mark describes him falling to the ground." }
      ] },
    { type: "compare",
      a: { label: "The woman at Bethany (14:3–9)", text: "Unnamed. She spends a year's wages on Jesus and is scolded for it. He says she has done what she could." },
      b: { label: "Peter, James and John (14:32–41)", text: "Named and chosen. Asked to keep watch for one hour, they are found asleep three times." },
      question: "What is Mark showing through this contrast?",
      answer: "The insiders are full of promises and cannot stay awake. The woman makes no promises and does the one thing in her power. Throughout Mark, the people who respond rightly to Jesus are often not the ones we would expect." }
  ],
  respond: {
    reflect: "[[She has done what she could.]] Her critics measured the gift by what else the money might have achieved. Jesus measured it by her love for him at the moment it was needed. What does his defense of her teach about devotion that looks wasteful to other people?",
    practice: "Do one generous thing for someone this week that is not efficient: more time than is necessary, a better gift than is required, a visit with no agenda."
  },
  prayer: "Abba, Father, all things are possible for you. Thank you that your Son took the cup and did not turn away. When your will is hard for me, give me his honesty and his trust. Keep me awake with him, and receive what I can give. Amen."
});

ROOTED.sessions.push({
  id: 17, week: 6,
  title: "Are You the Christ?",
  passage: "Mark 14:43–15:15",
  search: "Mark 14:43-15:15",
  read: {
    intro: "In one night Jesus is arrested, abandoned, tried before the council, denied by Peter and handed to the Roman governor. Mark tells it quickly and without comment.",
    watchFor: "Two interrogations run side by side: Jesus before the council and Peter in the courtyard. Compare what each one says under questioning."
  },
  understand: [
    { kind: "text", text: "Judas arrives with an armed crowd and identifies Jesus with a kiss. [[They all left him, and fled.]] At the high priest's house the council looks for testimony and cannot make it agree. The high priest asks, [[Are you the Christ, the Son of the Blessed?]] Jesus says, [[I am. You will see the Son of Man sitting at the right hand of Power, and coming with the clouds of the sky.]] He is condemned for blasphemy, spat on and beaten. In the courtyard below, Peter denies three times that he knows Jesus. The rooster crows a second time, and he weeps. In the morning Jesus is taken to Pilate, who asks if he is King of the Jews and is amazed at his silence. Offered the choice, the crowd asks for Barabbas, a rebel and murderer. Pilate, [[wishing to please the multitude]], has Jesus flogged and hands him over to be crucified." },
    { kind: "background", text: "The council, or Sanhedrin, was the Jewish ruling body in Jerusalem, led by the high priest. Pontius Pilate governed Judea for Rome from AD 26 to 36, and under Roman rule the death penalty was in the governor's hands (John 18:31). So the charge changes between the two hearings: before the council it is religious, blasphemy; before Pilate it is political, a rival king. Jesus' reply to the high priest joins Psalm 110:1 and Daniel 7:13. *Barabbas* is Aramaic for “son of the father.” Mark does not remark on it." },
    { kind: "shape", text: "Mark frames Jesus' trial with Peter's story: Peter enters the courtyard (14:54), Jesus is tried (14:55–65), Peter denies him (14:66–72). The two happen at once. Jesus tells the truth and is condemned; Peter lies and walks free. And at the very moment the guards mock Jesus with the word [[Prophesy!]], his prophecy about Peter is coming true in the courtyard below. The young man who runs away naked appears only in Mark. The idea that he is Mark himself is an old guess with no evidence either way. In the story he completes the picture: everyone flees, at any cost." },
    { kind: "meaning", text: "All through Mark, Jesus has silenced those who announced who he was. Now, bound and facing death, he says it openly. The best explanation is that at this point he cannot be mistaken for the wrong kind of Messiah, because his identity and his suffering are finally seen together. His answer also turns the scene around: the prisoner will be seen enthroned as judge. Barabbas goes free and an innocent man dies in his place. Mark does not comment, but Christians have long seen in it a picture of what the cross means. One caution is needed. This passage has been misused to blame the Jewish people as a whole. Mark does not support that. Jesus and all his first followers were Jewish, and Mark assigns responsibility to particular leaders, a governor who knew better, a crowd, and Jesus' own disciples." }
  ],
  remember: [
    { type: "compare",
      a: { label: "Jesus before the high priest (14:61–62)", text: "Asked on pain of death whether he is the Christ, he answers, [[I am.]]" },
      b: { label: "Peter before a servant girl (14:66–71)", text: "Asked whether he was with Jesus, he swears, [[I don't know this man of whom you speak!]]" },
      question: "Mark tells these as one interwoven scene. What does that achieve?",
      answer: "It sets faithful confession beside failure in the same hour. Jesus tells the truth at the cost of his life, and Peter denies it to save his own. Peter's story is not finished, but Mark lets his weeping end the scene." },
    { type: "choice",
      prompt: "Throughout Mark, Jesus has told people to keep quiet about who he is. Why does he answer openly now?",
      options: [
        { text: "As a prisoner facing death he cannot be mistaken for the wrong kind of Messiah. His identity and his suffering are now seen together.", best: true,
          note: "This fits Mark's whole story. Since Peter's confession (8:29–31), Jesus has tied the title to the cross." },
        { text: "He has changed his mind about secrecy.",
          note: "Mark gives no sign of a change of mind. What has changed is the situation." },
        { text: "He is forced to answer by the high priest.",
          note: "A moment earlier he stayed silent under questioning (14:61). The answer is his own choice." }
      ] },
    { type: "recall", review: 10,
      prompt: "At Caesarea Philippi Jesus said that anyone who follows him must deny himself, and warned against being ashamed of him (8:34–38). How does the courtyard scene look in that light?",
      answer: "Peter had confessed, [[You are the Christ]], and then rebuked Jesus for speaking of the cross. Mark uses the same verb in both places: Jesus called his followers to deny themselves, and Peter denies Jesus. He had the title right at Caesarea Philippi. He had not yet accepted what it would cost." }
  ],
  respond: {
    reflect: "Peter's denials began with a small evasion to a servant girl, and all four Gospels record them. Why would the early church preserve the failure of its best-known leader so carefully? What does that suggest about what Christians believed about failure and grace?",
    practice: "Pilate knew what was right and did what pleased the crowd. Watch this week for one moment when the wish for approval pulls you away from what you know is right, in a conversation or a decision, and quietly choose the truth."
  },
  prayer: "Lord Jesus, you told the truth when it cost you everything, and I have been silent when it would have cost me little. Forgive my denials, the small ones and the large. Thank you that you were handed over in the place of the guilty. Make me faithful. Amen."
});

ROOTED.sessions.push({
  id: 18, week: 6,
  title: "The Son of God",
  passage: "Mark 15:16–16:8",
  search: "Mark 15:16-16:8",
  read: {
    intro: "This is the reading the whole Gospel has been moving toward. Mark tells it plainly, with very little description of the suffering itself. Read it slowly, and stop at 16:8.",
    watchFor: "Who stays near Jesus to the end? And who is the first human being in Mark to say who he is?"
  },
  understand: [
    { kind: "text", text: "Soldiers dress Jesus as a mock king and beat him. Simon of Cyrene is made to carry the cross. At Golgotha Jesus is crucified between two robbers under the charge [[THE KING OF THE JEWS]]. Passers-by and priests taunt him: [[He saved others. He can't save himself.]] From noon the land is dark. At three in the afternoon he cries out, [[My God, my God, why have you forsaken me?]], and then with a loud cry he dies. The temple veil is [[torn in two from the top to the bottom]], and the centurion says, [[Truly this man was the Son of God!]] Women who followed him from Galilee watch from a distance. Joseph of Arimathea buries the body in a rock tomb. After the Sabbath three women come with spices and find the stone rolled back. A young man in white says, [[He has risen. He is not here]], and sends them to [[tell his disciples and Peter]] that Jesus is going ahead of them to Galilee. They run from the tomb and say nothing to anyone, [[for they were afraid]]." },
    { kind: "background", text: "Crucifixion was designed for public shame as well as a slow death. Jesus' cry is the first line of Psalm 22, spoken in Aramaic, and details of the scene match that psalm: the divided clothing (22:18) and the mockers shaking their heads (22:7–8). The psalm moves from abandonment to rescue and praise among the nations. The veil was one of the curtains that screened off the holy areas of the temple; Mark does not say which. It is often noted that in that society women's testimony carried less weight in legal settings, which makes it striking that they are the named witnesses of the death, the burial and the empty tomb." },
    { kind: "shape", text: "The mockery is full of irony, because nearly everything said in scorn is true. He is the king. He saves others precisely by not saving himself. The places at his right and left, which James and John asked for, go to two criminals. Mark's beginning and end also match. At the baptism the heavens were torn open and a voice from heaven named Jesus as Son. At his death the veil is torn and a human voice says it, the voice of a Gentile soldier. Mark uses the same Greek verb for both tearings, though English translations often differ, and nowhere else in his Gospel." },
    { kind: "meaning", text: "Mark reports the cry of abandonment without explaining it. Christians have understood it in the light of what Jesus said earlier, that he gives his life as a ransom and drinks the cup: he bears what others deserved. Many also note that by praying Psalm 22 he calls the whole psalm to mind, including its ending in trust. These readings do not exclude each other, and no explanation removes the mystery. The centurion sees no miracle. He sees how Jesus dies, and that is what leads him to the confession Mark's first verse announced." },
    { kind: "differ", text: "A note on the ending. Your NKJV prints verses 9–20 with a footnote. Those verses appear in the great majority of later manuscripts, and Christian writers knew them by the late second century. The two oldest complete Greek copies of Mark end at 16:8, and the style of verses 9–20 differs from the rest of the book, so most scholars conclude that they were added early to supply an ending. Others defend them as original. The main events they report, the appearances of the risen Jesus, his commission and his ascension, are also told in the other Gospels and Acts. This study ends at 16:8, where the undisputed text ends. If Mark stopped there, he stopped on purpose with a promise still open: Jesus is going ahead to Galilee, where it all began, and Peter is invited by name." }
  ],
  remember: [
    { type: "compare", review: 1,
      a: { label: "The baptism (1:10–11)", text: "The heavens are torn open, the Spirit comes down, and a voice from heaven says, [[You are my beloved Son]]." },
      b: { label: "The death (15:37–39)", text: "Jesus breathes his last, the temple veil is torn from top to bottom, and a centurion says, [[Truly this man was the Son of God!]]" },
      question: "What does Mark achieve by framing his Gospel with these two scenes?",
      answer: "What heaven declared at the beginning, a human being finally confesses at the end, and it takes the cross for him to see it. The tearing is from the top, from God's side. The first verse of Mark gave Jesus two titles. Peter spoke the first (8:29). The centurion speaks the second." },
    { type: "choice",
      prompt: "The messenger says, “Tell his disciples and Peter.” Why might Peter be singled out?",
      options: [
        { text: "After his denial, Peter might no longer count himself a disciple. The message makes sure he is included.", best: true,
          note: "The last we saw of Peter, he was weeping in the courtyard. The wording reaches for him in particular." },
        { text: "As the leader, Peter has to be told first.",
          note: "Possible. But Mark's last picture of Peter is his denial, and “his disciples and Peter” reads like an answer to it." },
        { text: "Peter is being named for rebuke.",
          note: "The message is all promise: there you will see him, as he told you. There is no reproach in it." }
      ] },
    { type: "sequence",
      prompt: "One last look back. Put these turning points of Mark's Gospel in order.",
      items: [
        "A voice from heaven: “my beloved Son”",
        "Peter: “You are the Christ”",
        "Jesus enters Jerusalem and the temple",
        "A centurion: “the Son of God”",
        "The tomb is found empty"
      ],
      explain: "This is the shape of the whole book. Heaven says who Jesus is. A disciple half sees it. The king comes to his city and is rejected. At the cross a Gentile soldier sees it. And the story ends with the tomb empty and the road open." }
  ],
  respond: {
    reflect: "Mark ends with an empty tomb, a promise and frightened silence. The women are told that Jesus has gone ahead to Galilee, where the story began. What would it mean for you to go back to the beginning and follow him again, now that you know where the road leads?",
    practice: "The women were told to go and tell. This week, tell someone in your own plain words what you have come to understand about Jesus from reading Mark."
  },
  prayer: "Lord Jesus Christ, Son of God, you were forsaken so that we might be brought near. You gave your life as a ransom for many, and God raised you from the dead. You go ahead of me still. Take away my fear and my silence, and lead me to follow you from here. Amen."
});
