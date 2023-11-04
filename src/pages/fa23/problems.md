## **Ratios, *Summer 2023 Final***

### Creation

Goal: Mutation-based problem focused on postorder vs. preorder traversal, using helpers to pass along additional information.

Insights:

- We do something on our way down the tree. We do something else on our way back up!
- My favorite part of the problem is that we don't aggregate a count by returning a recursive result.

Failed Ideas:

- I wanted to write a tree problem where the below definition wasn't constrained to a subtree. What if I could get all the number of nodes below a certain depth globally in my tree?
- I (think) this is probably not solvable with a depth-first search and would probably need 61B knowledge, but who knows (I don't).

### Iteration

My first version of the problem was deemed not difficult enough, so I added in a predicate function that must pass for a node to be counted. This added some nice additional complexity. From the perspective of a node...

- Before - the number of nodes below me = the number of children I have            + the number of children my children have.
- After  - the number of nodes below me = the number of filtered children I have   + the number of children my children have.

So now we need some additional control structures to arrive at the number of filtered children before I enter my postorder traversal. Finally, only once I've returned to the fram can I append on the number of children I have. I think this two-step computation makes the problem pretty neat.

### Reception

The % of full scoring students for this problem was in the mid-30's, which I think is relatively in line with a medium level Tree problem.

### Reflection

I think the most beautiful part about the problem writing process was that I simply had some vague concept in my head, drew it on iPad, then used the very ideas (recursive leap of faith) learned in class to solve the problem - a nice full circle moment for someone who could absolutey not wrap his mind around the concept just some months ago.

Even though no one would ever need a mutative ratio-tree, I think I'm somewhat proud of this problem since it relies heavily on conceptual fundamentals rather than any impossibly difficult tricks.

## Waves, Summer 2023 HW02

### Creation

### Iteration

I think the outcome of this problem hinged a lot of the wording of the problem statement. If I didn't make it concise, the problem would most likely end up a disaster. Luckily, I had a lot of help from some amazing genius staff members.

### Reception

Probably one of the most embarassing moments for me was when I was asked to talk a little about my problem during staff meeting and I struggled getting my words out. It probably wasn't a good look for the person who wrote the problem to be stumbling over how the problem works? Like I had a gut feeling for why the problem works. I can draw an explanation for why the problem works. But then how do I bridge the gap in terms of explaning how to get arrive at that why?

Then overall it felt like a good amount of students struggled with
And in helping students with this problem, I felt like I spent so much time dissecting the why the plateau case works that I began to question how instructive this problem really was.

### Reflection

I think these two experiences made me think more about why I generally want to achieve when introducing a new problem. Is it to hone the fundamentals? Is it to introduce some trick that hinges on some "insight"? I mean I personally like it when a problem hinges on some "trick". That's what makes it difficult. That what makes the problem unique! But does a student gain transferable understanding in this? Not so sure about that one.

## Remove, Summer 2023 Lab

Only after I wrote this problem did I realize that it's mutative version of Spring 2023 Midterm #2. Try that one if you get a chance (I'm pretty sure it was extremely extremely low scoring).

## Dictionary Comprehension, Summer 2023 Lab

## Find, Summer 2023 Lab

## N-ary Tree, Summer 2023 Lab

# Misc. Past Problems

Here are some problems I've written throughout the course of CSM, when I knew a lot less 61A. The quality is definitely lower across the board.

However, if you'd like some additional practice at the level approximately between homework and exams, feel free to give them a try! I've included tests, but I've taken down solutions for security. Just shoot me an email if you'd like solution + explanation, or if you find more optimal solutions.