# JS Assignment - Fundamentals of Web Design
This repository has solutions to 6 JavaScript problems given FWD assignment-04.

---

## Question 1: Digit Gatekeeper

**Approach:**
* Check if integers in range-(L ≤ x ≤ R) are prime
* Loop from L to R to check if numbers in range are divisible by K
* Ensure no digit is 0
* Calculate digit sum
* Also calculate whether the sum of digits of x is a prime number

**Time Complexity:** O(N) [Single loop]

---

## Question 2: Roll-Seed Lock

**Approach:**

* Repeat operation 3 times
* If even → divide by 2 and add seed
* If odd → multiply by 3 and subtract seed
* Check if result is 3-digit and middle digit = seed

**Time Complexity:** O(1) [No loop]

---

## Question 3: Mirror Corridor

**Approach:**

* Try values of X from 0 to 100000
* Check if (N + X) is palindrome using in-built function like split(),reverse(),join()
* Check divisibility by K

**Time Complexity:** O(N) [Single loop]

---

## Question 4: Fare Calculator

**Approach:**

* Take base, distance, minutesLate, and seed using prompt().
* Compute base fare
* Apply conditions step by step
* Use Math.floor() and Math.ceil() for rounding

**Time Complexity:** O(1) [No loop]

---

## Question 5: Skipping Numbers

**Approach:**

* Keep adding numbers from 1 to m that are not divisible by (seed + 2)
* Stop when sum ≥ N

**Time Complexity:** O(m) [Single loop runs from 1 to m]

---

## Question 6: Contest Score Judge

**Approach:**

* Calculate score using formula
* Apply conditions
* Finally, decide PASS/FAIL

**Time Complexity:** O(1) [No loop]

---
