# Counting Valleys

Not sure if there's a more efficent approach in handling this problem. It seems to be a case of consecutive entries, but knowing that the `sea level` will always return to 0 mitigates that issue. Solution was primarily iterating through the path, keep track of height, and respond accordingly to when it returns to 0. 