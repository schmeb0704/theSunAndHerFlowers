const generateBtn = document.querySelector(".generate");
const poemDisplay = document.querySelector(".poem-display");
let alreadyDisplayed = [];

let poemsArr = [
  {
    //Chapter 1: Wilting
    poem: `on the last day of love 
    <br/>
    my heart cracked inside my body`,
    chapter: "wilting",
    id: 1
  },
  {
    poem: `i spent the entire night
    <br/>
    casting spells to bring you back`,
    chapter: "wilting",
    id: 2
  },
  {
    poem: `i reached for the last bouquet of flowers
            <br/>
            you gave me
            <br/>
            now wilting in their vase
            <br/>
            one
            <br/>
            by
            <br/>
            one
            <br/>
            i popped their heads off
            <br/>
            and ate them`,
    chapter: "wilting",
    id: 3
  },
  {
    poem: `i stuffed a towel at the foot of every door
           <br/>
           leave i told the air
           <br/>
           i have no use for you
           <br/>
           i drew every curtain in the house
           <br/>
           go i told the light
           <br/>
           no one is coming in
           <br/>
           and no one is going out`,
    chapter: "wilting",
    id: 4,
    title: "cemetery"
  },
  {
    poem: `you left
            <br/>
            and i wanted you still
            <br/>
            yet i deserved someone
            <br/>
            who was willing to stay`,
    chapter: "wilting",
    id: 5
  },
  {
    poem: `i spend days in bed debilitated by loss
            <br/>
            i attempt to cry you back
            <br/>
            but the water is done
            <br/>
            and still you have not returned
            <br/>
            i pinch my belly till it bleeds
            <br/>
            have lost count of the days
            <br/>
            sun becomes moon and
            <br/>
            moon becomes sun and
            <br/>
            i become ghost
            <br/>
            a dozen different thoughts
            <br/>
            tear through me each second
            <br/>
            you must be on your way
            <br/>
            perhaps it’s best if you’re not
            <br/>
            i am okay
            <br/>
            no
            <br/>
            i am angry
            <br/>
            yes
            <br/>
            i hate you
            <br/>
            maybe
            <br/>
            i can’t move on
            <br/>
            i will
            <br/>
            i forgive you
            <br/>
            i want to rip my hair out
            <br/>
            over and over and over again
            <br/>
            till my mind exhausts itself into a silence
            <br/>
            yesterday
            <br/>
            the rain tried to imitate my hands
            <br/>
            by running down your body
            <br/>
            i ripped the sky apart for allowing it`,
    chapter: "wilting",
    id: 6,
    title: "jealousy"
  },
  {
    poem: `in order to fall asleep
            <br/>
            i have to imagine your body
            <br/>
            crooked behind mine
            <br/>
            spoon ladled into spoon
            <br/>
            till i can hear your breath
            <br/>
            i have to recite your name
            <br/>
            till you answer and
            <br/>
            we have a conversation
            <br/>
            only then
            <br/>
            can my mind
            <br/>
            drift off to sleep`,
    chapter: "wilting",
    id: 7,
    title: "pretend"
  },
  {
    poem: `it isn’t what we left behind
            <br/>
            that breaks me
            <br/>
            it’s what we could’ve built
            <br/>
            had we stayed`,
    chapter: "wilting",
    id: 8
  },
  {
    poem: `i can still see our construction hats lying
            <br/>
            exactly where we left them
            <br/>
            pylons unsure of what to guard
            <br/>
            bulldozers gazing out for our return
            <br/>
            the planks of wood stiff in their boxes
            <br/>
            yearning to be nailed up
            <br/>
            but neither of us goes back
            <br/>
            to tell them it is over
            <br/>
            in time
            <br/>
            the bricks will grow tired of waiting and crumble
            <br/>
            the cranes will droop their necks in sorrow
            <br/>
            the shovels will rust
            <br/>
            do you think flowers will grow here
            <br/>
            when you and i are off
            <br/>
            building something new
            <br/>
            with someone else`,
    chapter: "wilting",
    id: 9,
    title: "the construction site of our future"
  },
  {
    poem: `i live for that first second in the morning
          <br/>
          when i am still half-conscious
          </br>
          i hear the hummingbirds outside
          <br/>
          flirting with the flowers
          <br/>
          i hear the flowers giggling
          <br/>
          and the bees growing jealous
          <br/>
          when i turn over to wake you
          <br/>
          it starts all over again
          <br/>
          the panting
          <br/>
          the wailing
          <br/>
          the shock
          <br/>
          of realizing
          <br/>
          that you’ve left`,
    chapter: "wilting",
    id: 10,
    title: "the first mornings without you"
  },
  {
    poem: `the hummingbirds tell me
            <br/>
            you’ve changed your hair
            <br/>
            i tell them i don’t care
            <br/>
            while listening to them
            <br/>
            describe every detail`,
    chapter: "wilting",
    id: 11,
    title: "hunger"
  },
  {
    poem: `i envy the winds
           <br/>
           who still witness you`,
    chapter: "wilting",
    id: 12
  },
  {
    poem: `i could be anything
            <br/>
            in the world
            <br/>
            but i wanted to be his`,
    chapter: "wilting",
    id: 13
  },
  {
    poem: `i tried to leave many times but
            <br/>
            as soon as i got away
            <br/>
            my lungs buckled under the pressure
            <br/>
            panting for air i’d return
            <br/>
            perhaps this is why i let you
            <br/>
            skin me to the bone
            <br/>
            something
            <br/>
            was better than nothing
            <br/>
            having you touch me
            <br/>
            even if it was not kind
            <br/>
            was better than not having your hands at all
            <br/>
            i could take the abuse
            <br/>
            i could not take the absence
            <br/>
            i knew i was beating a dead thing
            <br/>
            but did it matter
            <br/>
            if the thing was dead
            <br/>
            when at the very least
            <br/>
            i had it`,
    chapter: "wilting",
    id: 14,
    title: "addiction"
  },
  {
    poem: `you break women in like shoes`,
    chapter: "wilting",
    id: 15
  },
  {
    poem: `loving you was breathing
            <br/>
            but that breath disappearing
            <br/>
            before it filled my lungs`,
    chapter: "wilting",
    id: 16,
    title: "when it goes too soon"
  },
  
  {
    poem: `you cannot
            <br/>
            walk in and out of me
            <br/>
            like a revolving door
            <br/>
            i have too many miracles
            <br/>
            happening inside me
            <br/>
            to be your convenient option`,
    chapter: "wilting",
    id: 18,
    title: "not your hobby"
  },
  
  {
    poem: `you took the sun with you
            <br/>
            when you left`,
    chapter: "wilting",
    id: 19
  },
   {
    poem: `i remained committed
          <br/>
          long after you were gone
          <br/>
          i could not lift my eyes
          <br/>
          to meet eyes with someone else
          <br/>
          looking felt like betrayal
          <br/>
          what excuse would i have
          <br/>
          when you came back
          <br/>
          and asked where my hands had been`,
    chapter: "wilting",
    id: 20,
    title: "loyal"
  },
   {
    poem: `when you plunged the knife into me
            <br/>
            you also began bleeding
            <br/>
            my wound became your wound
            <br/>
            didn’t you know
            <br/>
            love is a double-edged knife
            <br/>
            you will suffer the way you make me suffer`,
    chapter: "wilting",
    id: 21,
  },
  {
    poem: `i think my body knew you would not stay`,
    chapter: "wilting",
    id: 22
  },
  {
    poem: `i long
          <br/>
          for you
          <br/>
          but you long
          <br/>
          for someone else
          <br/>
          i deny the one
          <br/>
          who wants me
          <br/>
          cause i want someone else`,
    chapter: "wilting",
    id: 23,
    title: "the human condition"
  },
  {
    poem: `i wonder if i am
            <br/>
            beautiful enough for you
            <br/>
            or if i am beautiful at all
            <br/>
            i change what i am wearing
            <br/>
            five times before i see you
            <br/>
            wondering which pair of jeans will make
            <br/>
            my body more tempting to undress
            <br/>
            tell me
            <br/>
            is there anything i can do
            <br/>
            to make you think
            <br/>
            her
            <br/>
            she is so striking
            <br/>
            she makes my body forget it has knees
            <br/>
            write it in a letter and address it
            <br/>
            to all the insecure parts of me
            <br/>
            your voice alone drives me to tears
            <br/>
            yours telling me i am beautiful
            <br/>
            yours telling me i am enough`,
    chapter: "wilting",
    id: 24
  },
  {
    poem: `you’re everywhere
          <br/>
          except right here
          <br/>
          and it hurts`,
    chapter: "wilting",
    id: 25
  },
  {
    poem: `show me a picture
            <br/>
            i want to see the face of the woman
            <br/>
            who made you forget the one you had at home
            <br/>
            what day was it and
            <br/>
            what excuse did you feed me
            <br/>
            i used to thank the universe
            <br/>
            for bringing you to me
            <br/>
            did you enter her right as
            <br/>
            i asked the almighty
            <br/>
            to grant you all you wanted
            <br/>
            did you find it in her
            <br/>
            did you come crawling out of her
            <br/>
            with what you couldn’t in me`,
    chapter: "wilting",
    id: 26
  },
  {
    poem: `what draws you to her
            <br/>
            tell me what you like
            <br/>
            so i can practice`,
    chapter: "wilting",
    id: 27
  },
  {
    poem: `your absence is a missing limb`,
    chapter: "wilting",
    id: 28
  },
  {
    poem: `you call to tell me you miss me
            <br/>
            i turn to face the front door of the house
            <br/>
            waiting for a knock
            <br/>
            days later you call to say you need me
            <br/>
            but still aren’t here
            <br/>
            the dandelions on the lawn
            <br/>
            are rolling their eyes in disappointment
            <br/>
            the grass has declared you yesterday’s news
            <br/>
            what do i care
            <br/>
            if you love me
            <br/>
            or miss me
            <br/>
            or need me
            <br/>
            when you aren’t doing anything about it
            <br/>
            if i’m not the love of your life
            <br/>
            i’ll be the greatest loss instead`,
    chapter: "wilting",
    id: 30
  },
  {
    poem: `where do we go from here my love
            <br/>
            when it’s over and i’m standing between us
            <br/>
            whose side do i run to
            <br/>
            when every nerve in my body is pulsing for you
            <br/>
            when my mouth waters at the thought
            <br/>
            when you are pulling me in just by standing there
            <br/>
            how do i turn around and choose myself`,
    chapter: "wilting",
    id: 31
  },
  {
    poem: `day by day i realize
            <br/>
            everything i miss about you
            <br/>
            was never there in the first place`,
    chapter: "wilting",
    id: 32,
    title: `the person i fell in love with was a mirage`
  },
  {
    poem: `they leave
            <br/>
            and act like it never happened
            <br/>
            they come back
            <br/>
            and act like they never left`,
    chapter: "wilting",
    id: 33,
    title: "ghosts"
  },
  {
    poem: `i tried to find it
            <br/>
            but there was no answer
            <br/>
            at the end of the last conversation`,
    chapter: "wilting",
    id: 34,
    title: "closure"
  },
  {
    poem: `you ask
          <br/>
          if we can still be friends
          <br/>
          i explain how a honeybee
          <br/>
          does not dream of kissing
          <br/>
          the mouth of a flower
          <br/>
          and then settle for its leaves`,
    chapter: "wilting",
    id: 35,
    title: "i don’t need more friends"
  },
  {
    poem: `why is it
            <br/>
            that when the story ends
            <br/>
            we begin to feel all of it`,
    chapter: "wilting",
    id: 36
  },
  {
    poem: `<em>rise</em>
            <br/>
            said the moon
            <br/>
            and the new day came
            <br/>
            <em>the show must go on</em> said the sun
            <br/>
            life does not stop for anybody
            <br/>
            it drags you by the legs
            <br/>
            whether you want to move forward or not
            <br/>
            that is the gift
            <br/>
            life will force you to forget how you long for them
            <br/>
            your skin will shed till there is not
            <br/>
            a single part of you left they’ve touched
            <br/>
            your eyes finally just your eyes
            <br/>
            not the eyes which held them
            <br/>
            you will make it to the end
            <br/>
            of what is only the beginning
            <br/>
            go on
            <br/>
            open the door to the rest of it`,
    chapter: "wilting",
    id: 37,
    title: "time"
  },
  //Chapter 2: Falling - starts at index 35
  {
    poem: `i notice everything i do not have
            <br/>
            and decide it is beautiful`,
    chapter: "falling",
    id: 1
  },
  {
    poem: `i hardened under the last loss. it took something human out of me. i used to
            <br/>
            be so deeply emotional i’d crumble on demand. but now the water has made
            <br/>
            its exit. of course i care about the ones around me. i’m just struggling to
            <br/>
            show it. a wall is getting in the way. i used to dream of being so strong
            <br/>
            nothing could shake me. now. i am. so strong. that nothing shakes me.
            <br/>
            and all i dream is to soften.
            `,
    chapter: "falling",
    id: 2,
    title: "numbness"
  },
  {
    poem: `yesterday
          <br/>
          when i woke up
          <br/>
          the sun fell to the ground and rolled away
          <br/>
          flowers beheaded themselves
          <br/>
          all that’s left alive here is me
          <br/>
          and i barely feel like living`,
    chapter: "falling",
    id: 3,
    title: "depression is a shadow living inside me"
  },
  {
    poem: `<em>why are you so unkind to me</em>
          <br/>
          my body cries
          <br/>
          <br/>
          <em>cause you don’t look like them</em>
          <br/>
          i tell her`,
    chapter: "falling",
    id: 4
    
  },
  {
    poem: `you are waiting for someone
            <br/>
            who is not coming back
            <br/>
            meaning
            <br/>
            you are living your life
            <br/>
            hoping that someone will realize
            <br/>
            they can’t live theirs without you`,
    chapter: "falling",
    id: 5,
    title: "realizations don’t work like that"
  },
  {
    poem: `a lot of times
          <br/>
          we are angry at other people
          <br/>
          for not doing what
          <br/>
          we should have done for ourselves`,
    chapter: "falling",
    id: 6,
    title: "realizations"
  },
  {
    poem: `why
          <br/>
          did you leave a door
          <br/>
          hanging
          <br/>
          open between my legs
          <br/>
          were you lazy
          <br/>
          did you forget
          <br/>
          or did you purposely leave me unfinished`,
    chapter: "falling",
    id: 7,
    title:  "conversations with god"
  },
  {
    poem: `they did not tell me it would hurt like this
            <br/>
            no one warned me
            <br/>
            about the heartbreak we experience with friends
            <br/>
            where are the albums i thought
            <br/>
            there were no songs sung for it
            <br/>
            i could not find the ballads
            <br/>
            or read the books dedicated to writing the grief
            <br/>
            we fall into when friends leave
            <br/>
            it is the type of heartache that
            <br/>
            does not hit you like a tsunami
            <br/>
            it is a slow cancer
            <br/>
            the kind that does not show up for months
            <br/>
            has no visible signs
            <br/>
            is an ache here
            <br/>
            a headache there
            <br/>
            but manageable
            <br/>
            cancer or tsunami
            <br/>
            it all ends the same
            <br/>
            a friend or a lover
            <br/>
            a loss is a loss is a loss`,
    chapter: "falling",
    id: 8,
    title: "the underrated heartache"
  },
  {
    poem: `i hear a thousand kind words about me
          <br/>
          and it makes no difference
          <br/>
          yet i hear one insult
          <br/>
          and all confidence shatters`,
    chapter: "falling",
    id: 9,
    title: "focusing on the negative"
  },
  {
    poem: `when snow falls
            <br/>
            i long for grass
            <br/>
            when grass grows
            <br/>
            i walk all over it
            <br/>
            when leaves change color
            <br/>
            i beg for flowers
            <br/>
            when flowers bloom
            <br/>
            i pick them`,
    chapter: "falling",
    id: 11,
    title: "unappreciative"
  },
  {
    poem: `tell them i was the
            <br/>
            warmest place you knew
            <br/>
            and you turned me cold`,
    chapter: "falling",
    id: 12
  },
  {
    poem: `at home that night
          <br/>
          i filled the bathtub with scorching water
          <br/>
          tossed in spearmint from the garden
          <br/>
          two tablespoons almond oil
          <br/>
          some milk
          <br/>
          and honey
          <br/>
          a pinch of salt
          <br/>
          rose petals from the neighbor’s lawn
          <br/>
          i soaked myself in the mixture
          <br/>
          desperate to wash the dirty off
          <br/>
          the first hour
          <br/>
          i picked pine needles from my hair
          <br/>
          counted them one two three
          <br/>
          lined them up on their backs
          <br/>
          the second hour
          <br/>
          i wept
          <br/>
          a howling escaped me
          <br/>
          who knew girl could become beast
          <br/>
          during the third hour
          <br/>
          i found bits of him on bits of me
          <br/>
          the sweat was not mine
          <br/>
          the white between my legs
          <br/>
          not mine
          <br/>
          the bite marks
          <br/>
          not mine
          <br/>
          the smell
          <br/>
          not mine
          <br/>
          the blood
          <br/>
          mine
          <br/>
          the fourth hour i prayed`,
    chapter: "falling",
    id: 13
  },
  {
    poem: `it felt like you threw me
            <br/>
            so far from myself
            <br/>
            i’ve been trying to find my way back ever since`,
    chapter: "falling",
    id: 14
  },
  {
    poem: `i reduced my body to aesthetics
          <br/>
          forgot the work it did to keep me alive
          <br/>
          with every beat and breath
          <br/>
          declared it a grand failure for not looking like theirs
          <br/>
          searched everywhere for a miracle
          <br/>
          foolish enough to not realize
          <br/>
          i was already living in one`,
    chapter: "falling",
    id: 15
  },
  {
    poem: `the irony of loneliness
            <br/>
            is we all feel it
            <br/>
            at the same time`,
            chapter: "falling",
            id: 16,
            title: "together"
  },
  {
    poem: `we have been dying
            <br/>
            since we got here
            <br/>
            and forgot to enjoy the view`,
    chapter: "falling",
    id: 17,
    title: "live fully"
  },
  {
    poem: `you were mine
          <br/>
          and my life was full
          <br/>
          you are no longer mine
          <br/>
          and my life
          <br/>
          is full`,
    chapter: "falling",
    id: 18
  },
  {
    poem: `my eyes
          <br/>
          make mirrors out of
          <br/>
          every reflective surface they pass
          <br/>
          searching for something beautiful looking back
          <br/>
          my ears fish for compliments and praise
          <br/>
          but no matter how far they go looking
          <br/>
          nothing is enough for me
          <br/>
          i go to clinics and department stores
          <br/>
          for pretty potions and new techniques
          <br/>
          i’ve tried the lasers
          <br/>
          i’ve tried the facials
          <br/>
          i’ve tried the blades and expensive creams
          <br/>
          for a hopeful minute they fill me
          <br/>
          make me glow from cheek to cheek
          <br/>
          but as soon as i feel beautiful
          <br/>
          their magic disappears suddenly
          <br/>
          where am i supposed to find it
          <br/>
          i am willing to pay any price
          <br/>
          for a beauty that makes heads turn
          <br/>
          every moment day and night`,
    chapter: "falling",
    id: 19
  },
  {
    poem: `this place makes me
          <br/>
          the kind of exhausted that has
          <br/>
          nothing to do with sleep
          <br/>
          and everything to do with
          <br/>
          the people around me
          `,
    chapter: "falling",
    id: 20,
    title: "introvert"
  },
  {
    poem: `you must see no worth in yourself
    <br/>
    if you find me worth less
    <br/>
    after you’ve touched me
    <br/>
    as if your hands on my body
    <br/>
    magnify you
    <br/>
    and reduce me to nothing
    `,
    chapter: "falling",
    id: 21,
    title: "worth is not something we transfer"
  },
  {
    poem: `you do not just wake up and become the butterfly`,
    chapter: "falling",
    id: 22,
    title: "growth is a process"
  },
  {
    poem: ``,
    chapter: "",
    id: ""
  },
  
]

generateBtn.addEventListener("click", ranNum);

function newPoem(num){
  if (poemsArr.length === 0){
    poemsArr.push(...alreadyDisplayed)
    alreadyDisplayed = []
  }


  poemDisplay.innerHTML = ""
  let poemDiv = document.createElement("div")
  let chapterDiv = document.createElement("div")
  poemDiv.setAttribute("class", `poem poem-${poemsArr[num].id}-${poemsArr[num].chapter}`)
  chapterDiv.setAttribute("class", "chapter")
  
  poemDiv.innerHTML = poemsArr[num].poem
  
  if (poemsArr[num].hasOwnProperty("title")){
    chapterDiv.innerHTML = `<span>"${poemsArr[num].title}"</span>, from <span>${poemsArr[num].chapter}</span>`
  }else{
     chapterDiv.innerHTML = `<span>${poemsArr[num].chapter}</span>, poem #${poemsArr[num].id}`  
  }
  
  
  poemDisplay.appendChild(poemDiv)
  poemDisplay.appendChild(chapterDiv)
  console.log(poemsArr[num].chapter, poemsArr[num].id)

  alreadyDisplayed.push(poemsArr[num])
  poemsArr.splice(num, 1)
  console.log(poemsArr.length, alreadyDisplayed.length)
}

function ranNum(){
  let newNum = Math.floor(Math.random() * poemsArr.length)
  
  newPoem(newNum)
}
