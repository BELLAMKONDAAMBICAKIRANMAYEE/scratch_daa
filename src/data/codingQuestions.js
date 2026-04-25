const codingQuestions = [
  {
    topicId: 1,
    topic: "Arrays",
    questions: [
      {
        title: "Find Maximum Element",
        difficulty: "Easy",
        problem: "Find the maximum element in an array.",
        examples: `Input: nums = [3, 1, 4, 1, 5, 9, 2, 6]
Output: 9`,
        starterCode: `def findMax(nums):
    pass`,
        solution: `def findMax(nums):
    return max(nums)`,
        hints: ["Use Python's built-in max()", "Or iterate and track the largest value seen so far"],
      },
      {
        title: "Reverse an Array",
        difficulty: "Easy",
        problem: "Reverse the elements of an array and return it.",
        examples: `Input: nums = [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]`,
        starterCode: `def reverseArray(nums):
    pass`,
        solution: `def reverseArray(nums):
    return nums[::-1]`,
        hints: ["Use slicing with [::-1]", "Or use two pointers swapping from both ends"],
      },
      {
        title: "Two Sum",
        difficulty: "Medium",
        problem: "Given an array and a target, return indices of two numbers that add up to target.",
        examples: `Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]`,
        starterCode: `def twoSum(nums, target):
    pass`,
        solution: `def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i`,
        hints: ["Use a hash map", "Store each number's index as you iterate", "Check if complement exists in map"],
      },
      {
        title: "Maximum Subarray (Kadane's)",
        difficulty: "Medium",
        problem: "Find the contiguous subarray with the largest sum.",
        examples: `Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6`,
        starterCode: `def maxSubArray(nums):
    pass`,
        solution: `def maxSubArray(nums):
    max_sum = current = nums[0]
    for num in nums[1:]:
        current = max(num, current + num)
        max_sum = max(max_sum, current)
    return max_sum`,
        hints: ["Use Kadane's algorithm", "Track current sum and reset if it goes negative", "Update max at each step"],
      },
      {
        title: "Trapping Rain Water",
        difficulty: "Hard",
        problem: "Given n non-negative integers representing elevation heights, compute how much water it can trap after raining.",
        examples: `Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6`,
        starterCode: `def trap(height):
    pass`,
        solution: `def trap(height):
    left, right = 0, len(height) - 1
    left_max = right_max = water = 0
    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                water += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                water += right_max - height[right]
            right -= 1
    return water`,
        hints: ["Use two pointers", "Track max height from left and right", "Water at index = min(left_max, right_max) - height[i]"],
      },
    ],
  },
  {
    topicId: 2,
    topic: "Strings",
    questions: [
      {
        title: "Palindrome Check",
        difficulty: "Easy",
        problem: "Check if a string is a palindrome.",
        examples: `Input: s = "racecar"
Output: True

Input: s = "hello"
Output: False`,
        starterCode: `def isPalindrome(s):
    pass`,
        solution: `def isPalindrome(s):
    return s == s[::-1]`,
        hints: ["Reverse string", "Compare original and reversed", "Ignore spaces if needed"],
      },
      {
        title: "Count Vowels",
        difficulty: "Easy",
        problem: "Count the number of vowels in a given string.",
        examples: `Input: s = "hello world"
Output: 3`,
        starterCode: `def countVowels(s):
    pass`,
        solution: `def countVowels(s):
    return sum(1 for ch in s.lower() if ch in 'aeiou')`,
        hints: ["Iterate over each character", "Check if char is in 'aeiou'", "Convert to lowercase first"],
      },
      {
        title: "Anagram Check",
        difficulty: "Medium",
        problem: "Given two strings, check if one is an anagram of the other.",
        examples: `Input: s = "listen", t = "silent"
Output: True`,
        starterCode: `def isAnagram(s, t):
    pass`,
        solution: `def isAnagram(s, t):
    from collections import Counter
    return Counter(s) == Counter(t)`,
        hints: ["Sort both strings and compare", "Or use a frequency Counter", "Lengths must match first"],
      },
      {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        problem: "Find the length of the longest substring without repeating characters.",
        examples: `Input: s = "abcabcbb"
Output: 3  # "abc"`,
        starterCode: `def lengthOfLongestSubstring(s):
    pass`,
        solution: `def lengthOfLongestSubstring(s):
    seen = {}
    left = max_len = 0
    for right, ch in enumerate(s):
        if ch in seen and seen[ch] >= left:
            left = seen[ch] + 1
        seen[ch] = right
        max_len = max(max_len, right - left + 1)
    return max_len`,
        hints: ["Use a sliding window", "Track last seen index of each character", "Move left pointer when duplicate found"],
      },
      {
        title: "Minimum Window Substring",
        difficulty: "Hard",
        problem: "Find the minimum window substring of s that contains all characters of t.",
        examples: `Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"`,
        starterCode: `def minWindow(s, t):
    pass`,
        solution: `def minWindow(s, t):
    from collections import Counter
    need = Counter(t)
    missing = len(t)
    left = start = end = 0
    for right, ch in enumerate(s, 1):
        if need[ch] > 0:
            missing -= 1
        need[ch] -= 1
        if missing == 0:
            while need[s[left]] < 0:
                need[s[left]] += 1
                left += 1
            if end == 0 or right - left < end - start:
                start, end = left, right
            need[s[left]] += 1
            missing += 1
            left += 1
    return s[start:end]`,
        hints: ["Use sliding window with two pointers", "Track character counts with Counter", "Shrink window from left when all chars are covered"],
      },
    ],
  },
  {
    topicId: 3,
    topic: "Linked Lists",
    questions: [
      {
        title: "Reverse a Linked List",
        difficulty: "Easy",
        problem: "Reverse a singly linked list and return the new head.",
        examples: `Input: 1 -> 2 -> 3 -> 4 -> 5
Output: 5 -> 4 -> 3 -> 2 -> 1`,
        starterCode: `def reverseList(head):
    pass`,
        solution: `def reverseList(head):
    prev = None
    curr = head
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    return prev`,
        hints: ["Use three pointers: prev, curr, next", "Iteratively reverse the next pointer", "prev becomes the new head"],
      },
      {
        title: "Find Middle of Linked List",
        difficulty: "Easy",
        problem: "Find the middle node of a linked list. If two middles exist, return the second one.",
        examples: `Input: 1 -> 2 -> 3 -> 4 -> 5
Output: Node(3)`,
        starterCode: `def middleNode(head):
    pass`,
        solution: `def middleNode(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow`,
        hints: ["Use slow and fast pointers", "Fast moves 2 steps, slow moves 1", "When fast reaches end, slow is at middle"],
      },
      {
        title: "Detect Cycle in Linked List",
        difficulty: "Medium",
        problem: "Determine if a linked list has a cycle in it.",
        examples: `Input: 3 -> 2 -> 0 -> -4 -> (back to 2)
Output: True`,
        starterCode: `def hasCycle(head):
    pass`,
        solution: `def hasCycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False`,
        hints: ["Use Floyd's cycle detection", "Slow pointer moves 1, fast moves 2", "If they meet, there's a cycle"],
      },
      {
        title: "Merge Two Sorted Linked Lists",
        difficulty: "Medium",
        problem: "Merge two sorted linked lists and return the merged sorted list.",
        examples: `Input: l1 = 1->2->4, l2 = 1->3->4
Output: 1->1->2->3->4->4`,
        starterCode: `def mergeTwoLists(l1, l2):
    pass`,
        solution: `def mergeTwoLists(l1, l2):
    dummy = curr = ListNode(0)
    while l1 and l2:
        if l1.val <= l2.val:
            curr.next = l1
            l1 = l1.next
        else:
            curr.next = l2
            l2 = l2.next
        curr = curr.next
    curr.next = l1 or l2
    return dummy.next`,
        hints: ["Use a dummy head node", "Compare heads of both lists each step", "Attach remaining list at the end"],
      },
      {
        title: "LRU Cache",
        difficulty: "Hard",
        problem: "Design a data structure that follows the Least Recently Used (LRU) cache constraint with O(1) get and put.",
        examples: `cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
cache.get(1)    # returns 1
cache.put(3, 3) # evicts key 2
cache.get(2)    # returns -1`,
        starterCode: `class LRUCache:
    def __init__(self, capacity):
        pass

    def get(self, key):
        pass

    def put(self, key, value):
        pass`,
        solution: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.capacity = capacity

    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)`,
        hints: ["Use OrderedDict for O(1) operations", "Move accessed items to end", "Pop from front when over capacity"],
      },
    ],
  },
  {
    topicId: 4,
    topic: "Trees",
    questions: [
      {
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
        problem: "Return the maximum depth of a binary tree.",
        examples: `Input: root = [3,9,20,null,null,15,7]
Output: 3`,
        starterCode: `def maxDepth(root):
    pass`,
        solution: `def maxDepth(root):
    if not root:
        return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))`,
        hints: ["Use recursion", "Depth = 1 + max(left depth, right depth)", "Base case: None returns 0"],
      },
      {
        title: "Inorder Traversal",
        difficulty: "Easy",
        problem: "Return the inorder traversal (left → root → right) of a binary tree's node values.",
        examples: `Input: root = [1, null, 2, 3]
Output: [1, 3, 2]`,
        starterCode: `def inorderTraversal(root):
    pass`,
        solution: `def inorderTraversal(root):
    result = []
    def dfs(node):
        if node:
            dfs(node.left)
            result.append(node.val)
            dfs(node.right)
    dfs(root)
    return result`,
        hints: ["Recurse left subtree first", "Then visit root", "Then recurse right subtree"],
      },
      {
        title: "Validate Binary Search Tree",
        difficulty: "Medium",
        problem: "Determine if a given binary tree is a valid BST.",
        examples: `Input: root = [2,1,3]
Output: True

Input: root = [5,1,4,null,null,3,6]
Output: False`,
        starterCode: `def isValidBST(root):
    pass`,
        solution: `def isValidBST(root, min_val=float('-inf'), max_val=float('inf')):
    if not root:
        return True
    if not (min_val < root.val < max_val):
        return False
    return (isValidBST(root.left, min_val, root.val) and
            isValidBST(root.right, root.val, max_val))`,
        hints: ["Pass min and max bounds recursively", "Left subtree values must be < root", "Right subtree values must be > root"],
      },
      {
        title: "Level Order Traversal (BFS)",
        difficulty: "Medium",
        problem: "Return the level order traversal of a binary tree's node values level by level.",
        examples: `Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]`,
        starterCode: `def levelOrder(root):
    pass`,
        solution: `from collections import deque

def levelOrder(root):
    if not root:
        return []
    result, queue = [], deque([root])
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        result.append(level)
    return result`,
        hints: ["Use a queue (BFS)", "Process all nodes at current level before moving next", "Use deque for efficient popleft"],
      },
      {
        title: "Serialize and Deserialize Binary Tree",
        difficulty: "Hard",
        problem: "Design an algorithm to serialize and deserialize a binary tree.",
        examples: `root = [1,2,3,null,null,4,5]
serialize(root) => "1,2,N,N,3,4,N,N,5,N,N"
deserialize(...) => original tree`,
        starterCode: `class Codec:
    def serialize(self, root):
        pass

    def deserialize(self, data):
        pass`,
        solution: `class Codec:
    def serialize(self, root):
        result = []
        def dfs(node):
            if not node:
                result.append('N')
                return
            result.append(str(node.val))
            dfs(node.left)
            dfs(node.right)
        dfs(root)
        return ','.join(result)

    def deserialize(self, data):
        vals = iter(data.split(','))
        def dfs():
            val = next(vals)
            if val == 'N':
                return None
            node = TreeNode(int(val))
            node.left = dfs()
            node.right = dfs()
            return node
        return dfs()`,
        hints: ["Use preorder DFS for serialization", "Use 'N' as null marker", "Deserialize using an iterator over split values"],
      },
    ],
  },
];

export default codingQuestions;
