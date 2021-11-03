bashCommand = "free -hm"
import subprocess
process = subprocess.Popen(bashCommand.split(), stdout=subprocess.PIPE)
output, error = process.communicate()
out = output[85:99]
print(out)