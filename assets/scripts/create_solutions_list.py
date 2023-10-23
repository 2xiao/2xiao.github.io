# -*- coding: utf-8 -*-
import os, re
from pathlib import Path
import pandas as pd
from urllib.parse import quote

# 根据 frame 生成 Markdown 表格
def gen_markdown_table(frame, need_sort):
    
    ELEMENT = " {} |"
    
    H = frame.shape[0]
    W = frame.shape[1]
    
    LINE = "|" + ELEMENT * W
    
    head_name = ["题号", "标题", "题解", "标签", "难度"]
    
    lines = []
    
    ## 表头部分
    lines += ["| {} | {} | {} | {} | {} |".format(head_name[0], head_name[1], head_name[2], head_name[3], head_name[4])]

    ## 分割线
    SPLIT = ":{}"
    line = "|"
    for i in range(W):
        line = "{} {} |".format(line, SPLIT.format('-'*6))
    lines += [line]
    
    ## 数据部分
    if need_sort:
        frame = frame.sort_values(by='题号')
    frame = frame.reset_index(drop=True)
    for i in range(H):
        lines += ["| {} | {} | {} | {} | {} |".format(frame.at[i, '题号'], frame.at[i, '标题'], frame.at[i, '题解'], frame.at[i, '标签'], frame.at[i, '难度'])]
    table = '\n'.join(lines)
    return table

# 根据题解目录 solutions_path 自动生成题解列表，并保存到 output_path 中
def gen_solutions_list(solutions_path, solotions_output_path):
    files = os.listdir(solutions_path)
    frame = pd.DataFrame(columns=['题号', '标题', '题解', '标签', '难度'])
    frame_cout = 0
    
    df = pd.read_csv("leetcode-problems.csv")
    
    for file in files:
        # 判断是否是文件夹
        if ".md" not in file:
            continue
        
        # 获取题目所在行
        df_indexs = df[df['文件名'] == Path(file).stem].index.tolist()
        
        if not df_indexs:
            print('%s 没有出现在 leetcode-problems.csv 中' % (Path(file).stem))
            continue
        row = df_indexs[0]
        
        problem_id = df.loc[row, "序号"]
        problem_name = df.loc[row, "文件名"]
        problem_catalog = df.loc[row, "所在目录"]
        problem_title = df.loc[row, "标题"]
        problem_title_slug = df.loc[row, "标题末尾"]
        problem_link = "[" + problem_title_slug + "](" + df.loc[row, "标题链接"] + ")"
        problem_link_slug = df.loc[row, "标题链接末尾路径"]
        problem_solution_path = os.path.join(solutions_path, problem_name + ".md")
        if os.path.exists(problem_solution_path):
            problem_solution_link = "[JS](" + df.loc[row, "网站题解链接"] + ")"
        else:
            problem_solution_link = ""
        problem_label = df.loc[row, "标签"]
        problem_difficulty = df.loc[row, "难度"]
        res = [problem_id, problem_link, problem_solution_link, problem_label, problem_difficulty]
        frame.loc[frame_cout] = res
        frame_cout += 1
        
    table = gen_markdown_table(frame, True)
    with open(solotions_output_path, 'w', encoding='utf-8') as f:
        f.writelines("# 1.3 LeetCode 题解（字典排序）\n\n")
        f.writelines("已完成 {} 道\n\n".format(frame_cout))
        f.write(table)
    f.close()
    print("Create Solutions List Success")
    return frame_cout

# 根据题解所在目录自动生成题解列表，并保存到 slice_output_path 中
def gen_slice_list(solutions_path, slice_output_path):
    files = os.listdir(solutions_path)

    frames = {}
    file_name = {'Offer': '剑指 Offer', 'Offer-II': '剑指 Offer II', 'Interviews': '面试题', 'LCP': '力扣杯'}
    df = pd.read_csv("leetcode-problems.csv")

    for file in files:
        # 判断是否是文件夹
        if ".md" not in file:
            continue
        
        # 获取题目所在行
        df_indexs = df[df['文件名'] == Path(file).stem].index.tolist()
        
        if not df_indexs:
            print('%s 没有出现在 leetcode-problems.csv 中' % (Path(file).stem))
            continue
        row = df_indexs[0]
        
        problem_id = df.loc[row, "序号"]
        problem_name = df.loc[row, "文件名"]
        problem_catalog = df.loc[row, "所在目录"]
        problem_title = df.loc[row, "标题"]
        problem_title_slug = df.loc[row, "标题末尾"]
        problem_link = "[" + problem_title_slug + "](" + df.loc[row, "标题链接"] + ")"
        problem_link_slug = df.loc[row, "标题链接末尾路径"]
        problem_solution_path = os.path.join(solutions_path, problem_name + ".md")
        if os.path.exists(problem_solution_path):
            problem_solution_link = "[JS](" + df.loc[row, "网站题解链接"] + ")"
        else:
            problem_solution_link = ""
        problem_label = df.loc[row, "标签"]
        problem_difficulty = df.loc[row, "难度"]
        res = [problem_id, problem_link, problem_solution_link, problem_label, problem_difficulty]
        
        if problem_catalog not in frames:
            frames[problem_catalog] = pd.DataFrame(columns=['题号', '标题', '题解', '标签', '难度'])
        frame = frames[problem_catalog]
        frame.loc[len(frame.index)] = res
    
    for idx, frame in frames.items():
        table = gen_markdown_table(frame, True)
        slice_path = os.path.join(slice_output_path, idx + ".md")
        with open(slice_path, 'w', encoding='utf-8') as f:
            if idx not in file_name:
                f.writelines("# {}\n\n".format(idx))
            else:
                f.writelines("# {}\n\n".format(file_name[idx]))
            f.write(table)
        f.close()
    print("Create Slice List Success")

def append_table(file: str, table: str, delim: str = '<!-- START TABLE -->'):
    content = Path(file).read_text(encoding='utf-8')
    tips = "\n<!-- Please keep comment here to allow auto update -->\n<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE -->\n"
    if delim in content:
        content, old_table = content.split(delim)
    content += '\n' + delim + tips + table
    Path(file).write_text(content, encoding='utf-8')

# 根据题解目录, 题目分类原始列表目录，生成分类题解，并将整体保存到 categories_list_path
def gen_categories_list(solutions_path, categories_origin_list_path, categories_list_path):
    
    f = open(categories_origin_list_path, encoding='utf-8')
    lines = f.readlines()
    category_h2 = None
    category_h3 = None
    category_h4 = None
    category_h2_path = None
    page_path = None
    category_h2_file_content = ""
    category_file_content = ""
    
    df = pd.read_csv("leetcode-problems.csv")
    
    for i in range(len(lines)):
        pattern = re.compile(r'(#{2,6}) (.*)')
        match = pattern.match(lines[i])
        if match:
            title_size, title_content =  match.group(1,2)
            if title_size == "##":
                if category_h2 and category_h2_path and category_h2_file_content:
                    append_table(category_h2_path, category_h2_file_content)
                    
                    category_h2 = None
                    category_h2_path = None
                    page_path = None
                    category_h2_file_content = ""
                pattern1 = re.compile(r'\[(.*)\]\((.*)\)')
                match1 = pattern1.match(title_content)
                if match1:
                    category_h2, category_h2_path = match1.group(1,2)
                    page_path = '../' + category_h2_path
                    category_h2_path = '../../docs/leetcode/' + category_h2_path

                    category_h2_file_content += "\n\n## 相关题目\n\n"
                    category_file_content += "\n---\n### " + category_h2 + "\n[相关知识详解](" + page_path + ")\n"
                else:
                    category_h2 = title_content
                    category_file_content += "### " + category_h2 + "\n\n"
            elif title_size == "###":
                category_h3 = title_content
                category_h2_file_content += "### " + category_h3 + "\n\n"
                category_file_content += "#### " + category_h3 + "\n\n"
            elif title_size == "####":
                category_h4 = title_content
                category_h2_file_content += "#### " + category_h4 + "\n\n"
                category_file_content += category_h4 + "\n\n"
            elif title_size == "######":
                problem_titles = title_content.split('、')
                if not problem_titles:
                    continue
                
                frame = pd.DataFrame(columns=['题号', '标题', '题解', '标签', '难度'])
                frame_cout = 0
                for problem_title in problem_titles:
                    # 获取题目所在行
                    df_indexs = df[df['标题'] == problem_title].index.tolist()
                    
                    if not df_indexs:
                        print('%s 没有出现在 leetcode-problems.csv 中' % (problem_title))
                        continue
                    row = df_indexs[0]
                    
                    problem_id = df.loc[row, "序号"]
                    problem_name = df.loc[row, "文件名"]
                    problem_title = df.loc[row, "标题"]
                    problem_title_slug = df.loc[row, "标题末尾"]
                    problem_link = "[" + problem_title_slug + "](" + df.loc[row, "标题链接"] + ")"
                    problem_solution_path = os.path.join(solutions_path, problem_name + ".md")
                    if os.path.exists(problem_solution_path):
                        problem_solution_link = "[JS](" + df.loc[row, "网站题解链接"] + ")"
                    else:
                        problem_solution_link = ""
                    problem_label = df.loc[row, "标签"]
                    problem_difficulty = df.loc[row, "难度"]
                    res = [problem_id, problem_link, problem_solution_link, problem_label, problem_difficulty]
                    frame.loc[frame_cout] = res
                    frame_cout += 1
                
                table = gen_markdown_table(frame, False)
                category_h2_file_content += table + "\n\n"
                category_file_content += table + "\n\n"
                
    if category_h2 and category_h2_path and category_h2_file_content:
        append_table(category_h2_path, category_h2_file_content)
        
    if category_file_content:
        with open(categories_list_path, 'w', encoding='utf-8') as fi:
            fi.write("# 1.4 LeetCode 题解（分类排序 ★★★）\n\n<!-- START doctoc -->\n<!-- END doctoc -->\n\n\n")
            fi.write(category_file_content)
        fi.close()
    
    print("Create Categories List Success")
        

# 根据题解目录, 面试题目分类原始列表目录，生成面试题解，并将整体保存到 interview_list_path
def gen_interview_list(solutions_path, interview_origin_list_path, interview_list_path):
    
    f = open(interview_origin_list_path, encoding='utf-8')
    lines = f.readlines()
    interview_h2 = None
    interview_h3 = None
    interview_h4 = None
    interview_h6 = None
    interview_h3_file_path = None
    interview_h3_file_content = ""
    interview_file_content = ""
    
    df = pd.read_csv("leetcode-problems.csv")
    
    problems_set = set()
    for i in range(len(lines)):
        pattern = re.compile(r'(#{2,6}) (.*)')
        match = pattern.match(lines[i])
        if match:
            title_size, title_content =  match.group(1,2)
            if title_size == "##":
                interview_h2 = title_content
                interview_file_content += "### " + interview_h2 + "\n\n"
            elif title_size == "###":
                if interview_h3 and interview_h3_file_path and interview_h3_file_content:
                    interview_h3 = None
                    interview_h3_file_path = None
                    interview_h3_file_content = ""
                pattern1 = re.compile(r'\[(.*)\]\((.*)\)')
                match1 = pattern1.match(title_content)
                if match1:
                    interview_h3, interview_h3_file_path = match1.group(1,2)
                    interview_h3_file_content += interview_h3 + "\n\n"
                    interview_file_content += interview_h3 + "\n\n"
                else:
                    interview_h3 = title_content
                    interview_file_content += interview_h3 + "\n\n"
            elif title_size == "####":
                interview_h4 = title_content
                interview_h3_file_content += interview_h4 + "\n\n"
                interview_file_content += interview_h4 + "\n\n"
            elif title_size == "######":
                interview_h6 = title_content
                problem_titles = title_content.split('、')
                if not problem_titles:
                    continue
                
                frame = pd.DataFrame(columns=['题号', '标题', '题解', '标签', '难度'])
                frame_cout = 0
                for problem_title in problem_titles:
                    # 获取题目所在行
                    df_indexs = df[df['标题'] == problem_title].index.tolist()
                    
                    if not df_indexs:
                        print('%s 没有出现在 leetcode-problems.csv 中' % (problem_title))
                        continue
                    
                    problems_set.add(problem_title)
                    row = df_indexs[0]
                    
                    problem_id = df.loc[row, "序号"]
                    problem_name = df.loc[row, "文件名"]
                    problem_catalog = df.loc[row, "所在目录"]
                    problem_title = df.loc[row, "标题"]
                    problem_title_slug = df.loc[row, "标题末尾"]
                    problem_link = "[" + problem_title_slug + "](" + df.loc[row, "标题链接"] + ")"
                    problem_link_slug = df.loc[row, "标题链接末尾路径"]
                    problem_solution_path = os.path.join(solutions_path, problem_name + ".md")
                    if os.path.exists(problem_solution_path):
                        problem_solution_link = "[JS](" + df.loc[row, "网站题解链接"] + ")"
                    else:
                        problem_solution_link = ""
                    problem_label = df.loc[row, "标签"]
                    problem_difficulty = df.loc[row, "难度"]
                    res = [problem_id, problem_link, problem_solution_link, problem_label, problem_difficulty]
                    frame.loc[frame_cout] = res
                    frame_cout += 1
                        
                table = gen_markdown_table(frame, False)
                interview_h3_file_content += table + "\n\n"
                interview_file_content += table + "\n\n"
            
    if interview_file_content:
        with open(interview_list_path, 'w', encoding='utf-8') as fi:
            if "interview_100_list.md" in interview_origin_list_path:
                fi.write("# 1.5 LeetCode 面试最常考 100 题\n\n")
            elif "interview_200_list.md" in interview_origin_list_path:
                fi.write("# 1.6 LeetCode 面试最常考 200 题\n\n")
            fi.write(interview_file_content)
            fi.write("\n### 参考资料\n")
            fi.write("\n- 【清单】[CodeTop 企业题库](https://codetop.cc/home)\n")
        fi.close()
    
    print("Total Problems Count: " + str(len(problems_set)))
    print("Create Interview List Success")
