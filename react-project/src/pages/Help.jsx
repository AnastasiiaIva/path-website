import { FaqItem } from "../misc/FaqItem"


function Help() {

    return (
      <>
        <link rel="stylesheet" href="css/stylesMain.css" />

      <div className="container">
                <section className="faq-section">
                    <h2>Frequent Ask Questions</h2>

                    <FaqItem title="What is the Daily Challenge program?">
                        <p>
                        The Daily Challenge program is designed to help you improve
                        various aspects of your life through simple, daily missions. Each
                        day, you receive a new challenge aimed at enhancing your health,
                        well-being, and productivity. It’s about making small, achievable
                        changes that lead to significant benefits over time.
                        </p>
                    </FaqItem>
                    <FaqItem title="How do I participate in a Daily Challenge?">
                        <p>
                            Participation is easy! Sign up on our website to receive your
                            daily mission via email. Follow the task for the day, and track
                            your progress directly on our platform. You can also engage with
                            our community for support and motivation.
                        </p>
                    </FaqItem>
                    <FaqItem title="Are the Daily Challenges customizable?">
                        <p>
                        While the daily missions are designed to be universally
                        beneficial, they are crafted to be adaptable. If you have specific
                        goals or needs, you can choose from various categories to tailor
                        the challenges to better suit your lifestyle and preferences.
                        </p>
                    </FaqItem>
                    <FaqItem title="How do the challenges benefit me?">
                    <p>
                        Each challenge is crafted to address different aspects of personal
                        growth, including physical health, mental well-being, and
                        environmental sustainability. By participating, you’ll boost your
                        overall health, develop positive habits, and contribute to a
                        greener planet.
                    </p>
                    </FaqItem>
                    <FaqItem title="Can I compete with friends?">
                    <p>
                        Yes! You can challenge your friends by sharing your progress and
                        achievements. The app includes a leaderboard, so you can see how
                        you rank compared to your friends and motivate each other.
                    </p>
                    </FaqItem>
                    <FaqItem title="Is there a reward system?">
                    <p>
                        Absolutely! You earn points for every task you complete. These
                        points help you level up and unlock rewards, which can motivate
                        you to stay consistent.
                    </p>
                    </FaqItem>
                    <FaqItem title="How can I track my daily progress?">
                    <p>
                        The app includes a progress bar that tracks how many days in a row
                        you’ve completed tasks. It’s a great visual reminder of your
                        consistency!
                    </p>
                    </FaqItem>
                    <FaqItem title="What if I fall behind on my tasks?">
                    <p>
                        No worries! If you miss a day, your progress bar freezes, and you
                        can pick up right where you left off. This way, you can continue
                        without losing your streak.
                    </p>
                    </FaqItem>
                    <FaqItem title="Can I change my daily goals?">
                    <p>
                        Yes, you can adjust your goals at any time, from completing 1 task
                        to up to 3 tasks a day, allowing you to customize your daily
                        challenge to fit your schedule.
                    </p>
                    </FaqItem>
                    <FaqItem title="Can I invite my friends to the app?">
                    <p>
                        You can share the app with your friends by sending them a link.
                        However, there isn’t a built-in feature for inviting friends
                        directly within the app.
                    </p>
                    </FaqItem>
                    <FaqItem title="Do I get extra benefits for completing tasks early?">
                    <p>
                        Completing a task early doesn’t provide additional benefits, but
                        you’ll still earn points for each task you complete.
                    </p>
                    </FaqItem>
                    <FaqItem title="Is the app free, or are there paid features?">
                    <p>
                        The app is completely free to use. There are no premium features
                        or hidden fees.
                    </p>
                    </FaqItem>
                    <FaqItem title="Will I receive the same tasks I’ve already completed?">
                    <p>
                        No, tasks are unique every day. Once you complete a task, it won’t
                        repeat, ensuring that you’re always progressing with new
                        challenges.
                    </p>
                    </FaqItem>
                    <FaqItem title="Can I set reminders for my daily tasks?">
                    <p>
                        Currently, the app doesn’t have a reminder feature, but we’re
                        always looking to improve based on user feedback.
                    </p>
                    </FaqItem>
                    <FaqItem title="Can I suggest new tasks for the app?">
                    <p>
                        Yes, you can reach out to us via the contact form in the app to
                        share your ideas for new tasks. We’re always open to suggestions.
                    </p>
                    </FaqItem>
                    <FaqItem title="How are points calculated for each task?">
                    <p>
                        The more tasks you complete, the more points you earn.
                        Additionally, tasks are rated by difficulty, with harder tasks
                        awarding more points.
                    </p>
                    </FaqItem>
                    <FaqItem title="Can other users see the tasks I’ve completed?">
                    <p>
                        No, your completed tasks are only visible to you. Your progress
                        and task completion are private.
                    </p>
                    </FaqItem>
                    <FaqItem title="What happens if I miss more than three days of tasks?">
                    <p>
                        If you miss more than three days in a row, your points will reset,
                        and you’ll need to start over from zero.
                    </p>
                    </FaqItem>

                </section>
                <section className="contact-section">
        <div className="container">
          <h2>Any questions left?</h2>
          <button className="contact-btn">Contact us</button>

          {/* <!-- Floating Elements --> */}
          <div className="floating-icon megaphone">
            <img
              src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/refs/heads/main/assets/images/fqa-question-mark3.png"
              alt="Megaphone Icon"
            />
          </div>
          <div className="floating-icon help">
            <img
              src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/refs/heads/main/assets/images/fqa-navigation-mark1.png"
              alt="We'll Help Icon"
            />
          </div>
        </div>
      </section>
            </div>
      
      </>
    )
}

export default Help