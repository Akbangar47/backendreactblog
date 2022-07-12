const get = (req,res)=>{
    res.send([
          {
            "id": 33,
            "title": " Expert who helped Aditya Narayan lose ‘six kg in six weeks’ shares the singer’s diet and fitness routine",
            "Image": "https://images.indianexpress.com/2022/07/aditya-narayan_1200_insta.jpg",
            "category": "Fitness",
            "description": "Aditya Narayan often shares glimpses of his fitness sessions on Instagram. Now, the 34-year-old playback singer, who recently embraced fatherhood, has opened up about looking and feeling “smashing” after losing weight."
          },
          {
            "id": 34,
            "title": "Fitness alert: Effective tips to build muscle the right way",
            "Image": "https://images.indianexpress.com/2021/10/GettyImages-exercises-and-skincare-1200.jpg",
            "category": "Fitness",
            "description": "“Building muscle is not as simple as just going to the gym every day, you need to understand your body and know what you are doing,” said Dr Batul Patel, medical head – The Bombay Skin Clinic."
          },
          {
            "id": 35,
            "title": "Indian yoga instructor creates Guinness World Record by holding scorpion pose for almost 30 minutes",
            "Image": "https://static.toiimg.com/thumb/msid-92486107,imgsize-62278,width-800,height-600,resizemode-75/92486107.jpg",
            "category": "Fitness",
            "description": "Indian yoga practitioner and teacher Yash Mansukhbhai Moradiya, who is currently from Dubai, created a Guinness World Record by holding the scorpion pose for nearly 30 minutes."
          },
          {
            "id": 37,
            "title": "Hollywood actor Brie Larson a.k.a. Captain Marvel adds sled pushes to her workout",
            "Image": "https://static.toiimg.com/thumb/92757678.cms?width=680&height=512&imgsize=1833560",
            "category": "mix",
            "description": "The Captain Marvel actress always seems to push herself with new workouts. She's taken up rowing, flipped her core moves, and done weighted push-ups. Most recently, she's added an intense sled push to her workout."
          },
          {
            "id": 36,
            "title": " Burns Calories",
            "Image": "https://static.toiimg.com/thumb/92757727.cms?width=680&height=512&imgsize=22078",
            "category": "Fitness",
            "description": "ANever pushed a weighted sled before? Prepare for a heart-pounding, calorie-crushing workout. Whether the sled push is incorporated into a full-body circuit or finishing the workout with a few sets of sled pushes, it will increase the calories burnt throughout the workout immensely. It is known that with three minutes of sled push work it's possible to burn up to 250 calories."
          },
          {
            "id": 37,
            "title": "Full body workout",
            "Image": "https://static.toiimg.com/thumb/92757687.cms?width=680&height=512&imgsize=31120",
            "category": "Fitness",
            "description": "The sled push, when done correctly, works both upper and lower body muscles. This exercise will specifically target the quadriceps, glutes, calves, hamstrings, abdominals, hip flexors, chest, triceps, and shoulders. It is not necessary to add weight to the sled to engage the muscles as even without that, the muscles will be targeted."
          },
          {
            "id": 38,
            "title": "Coping with coronavirus: Effective ways to stay sane during COVID-19 pandemic",
            "Image": "https://static.toiimg.com/thumb/85238155.cms?width=680&height=512&imgsize=65683",
            "category": "Fitness",
            "description": "Since the onset of the novel coronavirus, people have been experiencing tremendous fear and anxiety. Not only has the virus taken a toll on people's physical health, but it has also disrupted their mental well-being. People's lives have been put on hold and there has been a diminished sense of security. In such troubled times, while some struggle to survive, others are on the brim of hopelessness. That said, for those of you finding it hard to stay put and strong, here are some ways you can stay sane and get through this pandemic.            "
          },
          {
            "id": 39,
            "title": "Exercise Improves Brain Fitness as You Age ",
            "Image": "https://www.verywellfit.com/thmb/GO6ZNMAt2wgFWBBrMP3sYzN8F3o=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-726775975-e35ebd2a79b34c52891e89151988aa02.jpeg",
            "category": "Fitness",
            "description": "Researchers recruited 105 men and women aged 70 to 77 and split them into three groups. The first performed supervised exercise twice a week with high-intensity interval training (HIIT) at a 90% peak heart rate. The second did moderate-intensity training at 70% peak heart rate. The third, a control group, did at least 30 minutes of daily activity, but at a low intensity and didn't have heart rate measured.There was one major aspect of improvement that wasn't related to heart rate or cortical thickness, Dr. Haberg adds—it was whether the participants felt control over their choices. For example, those who were able to choose their activity, where they exercised, and whether they exercised alone or with a training buddy tended to have more beneficial outcomes.rforming an activity chosen by the individual is key to better brain health, says Haberg. Also, diligently following physical activity guidelines provides a significant cardiorespiratory effect in healthy older adults. That type of control also can be part of maintaining a regular fitness routine, previous research suggests, because it can lead to greater enjoyment with exercise. For example, one study notes that about 50% of participants in exercise programs drop out in the first 6 months, but that those who feel positive emotions tend to have significantly higher levels of program adherence"
          },
          {
            "id": 40,
            "title": "Walking Shoe Types and Buying Tips",
            "Image": "https://www.verywellfit.com/thmb/1LJpQJpL0Ek812XT-GlNOpOjE_4=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-606353299-46be0bd52ffb43558df62348abf5fffb.jpg",
            "category": "Fitness",
            "description": "Walking shoes are your most important item of walking gear. Not only do you want to choose the best pair for your health and performance, but you also want to make sure that you are spending your money wisely.It's helpful to know what to look for in a good fitness walking shoe and how to understand that the pair you pick is the right set of shoes for your walking style.There's no one best shoe for all walkers. The best shoe for you is the one that fits you best. It should give you proper support, flexibility, and cushioning and compensate for any stride problems you may have, such as overpronation. Each person's feet are differentIt can be hard to determine all of that on your own, however. Find a shoe fitting expert to help you discover the best shoe for your walking distance, speed, style, and surface, as well as your weight and stride. The best place to find that person is at the most serious running shoe store in your area.Once you have found a shoe that fits you right, you may become more familiar with shoe lasts and shapes so that you can make your own selections in the future.Shoe manufacturers put the best design and technology into running shoe styles while walking shoe styles are designed primarily for market appeal rather than performance."
          }
    ])
}

module.exports.apiController = get;