---
layout: post
title: "算法拾遗"
date: 2018-09-30
timestamp: "2018-10-31 02:21:42 scinart"
categories: CS
comments: true
cc: "by-nc-nd"

---

+ {: .foldme summary-style="font-size: 24px"} NP-complete 相关笔记

  + 基础： <http://www.matrix67.com/blog/archives/105> [缓存](https://web.archive.org/web/20180829053408/http://www.matrix67.com/blog/archives/105)

    注意：蒜捣上说：The complexity class NP is the class of languages that can be verified by a polynomial-time algorithm.

    The name “NP” stands for “nondeterministic polynomial time.” The class NP was originally studied in the context of nondeterminism, but this book uses the somewhat simpler yet equivalent notion of verification. Hopcroft and Ullman [180] give a good presentation of NP-completeness in terms of nondeterministic models of computation.

    蒜捣上用了很长的铺垫，用encoding把问题转换成binary string representation, 转换后的问题叫concrete problem, 一个concrete problem的可行解和集合叫做***Language***，然后一个算法为一个机器，它***accept***或者***reject***一个字符串来决定它是不是属于这个concrete problem的language

  + 第一个NP-hard问题

    CIRCUIT-SAT 问题(布尔可满足性问题)，蒜捣上给了大概的证明思路，据说证明很长。

  + 一些常见的归约：

    + CIRCUIT-SAT < SAT 见蒜捣Theorem 34.9
    + SAT < 3-CNF-SAT 见蒜捣Theorem 34.10
    + 3-CNF-SAT < clique(最大完全子图问题) 见蒜捣Theorem 34.11
	+ clique < vertex-cover(图选最小的点集cover所有边) 见蒜捣Theorem 34.12
    + vertex-cover < hamiltonian cycle 见蒜捣Theorem 34.13 (未看)
    + hamiltonian cycle < TSP(旅行商问题) 见蒜捣Theorem 34.14 (未看)
    + 3-CNF-SAT < Subset-Sum 见蒜捣Theorem 34.15

+ {: .foldme summary-style="font-size: 24px"} 线段树

  2018-09-30 最近正好重新写了一遍线段树，还写了测试。觉得以前写的代码还是有点烂啊。

  [代码见这里](https://github.com/scinart/cpplib/blob/master/include/segment-tree.hpp), 
  [测试见这里](https://github.com/scinart/cpplib/blob/master/test/test_segment_tree.cpp)

+ {: .foldme summary-style="font-size: 24px"} 题解

  + {: .foldme } Ontology ( Quora code challenge 2018 )

    + {: .foldme } 题面

      #### Ontology

      Quora has many questions on different topics,
      and a common product use-case for our @mention selectors and search service
      is to look-up questions under a certain topic as quickly as possible.

      For this problem, imagine a simplified version of Quora where each question has only one topic associated with it.
	  In turn, the topics form a simplified ontology where each topic has a list of children, and all topics are descendants of a single root topic.

      Design a system that allows for fast searches of questions under topics.
	  There are $$ N $$ topics, $$ M $$ questions, and $$ K $$ queries, given in this order.
	  Each query has a desired topic as well as a desired string prefix.
	  For each query, return the number of questions that fall under the queried topic and begin with the desired string.
	  When considering topics, we want to include all descendants of the queried topic as well as the queried topic itself.
	  In other words, each query searches over the subtree of the topic.

      The topic ontology is given in the form of a flattened tree of topic names, where each topic may optionally have children.
	  If a topic has children, they are listed after it within parentheses, and those topics may have children of their own, etc.
	  See the sample for the exact input format. The tree is guaranteed to have a single root topic.

      For ease of parsing, each topic name will be composed of English alphabetical characters, and
	  each question and query text will be composed of English alphabetical characters, spaces, and question marks.
	  Each question and query text will be well behaved: there will be no consecutive spaces or leading/trailing spaces.
	  All queries, however, are case sensitive.

      #### Constraints

      + For 100% of the test data, $$1≤N,M,K≤10^5$$, and the input file is smaller than 5MB
      + For 50% of the test data, $$1≤N,M,K≤2⋅10^4$$, and the input file is smaller than 1MB

      #### Input Format

      + Line $$ 1 $$: One integer $$N$$
      + Line $$ 2 $$: $$N$$ topics arranged in a flat tree (see sample)
      + Line $$ 3 $$: One integer $$M$$
      + Line $$ 4...M+3 $$: Each line contains a topic name, followed by a colon and a space, and then the question text.
      + Line $$ M+4 $$: One integer $$K$$
      + Line $$ M+5...M+K+4 $$: Each line contains a topic name, followed by a space, and then the query text.

      #### Output Format

      + Line $$1...K$$: Line $$i$$ should contain the answer for the $$i$$-th query.

      #### Sample Input

          6
          Animals ( Reptiles Birds ( Eagles Pigeons Crows ) )
          5
          Reptiles: Why are many reptiles green?
          Birds: How do birds fly?
          Eagles: How endangered are eagles?
          Pigeons: Where in the world are pigeons most densely populated?
          Eagles: Where do most eagles live?
          4
          Eagles How en
          Birds Where
          Reptiles Why do
          Animals Wh

      #### Sample Output

          1
          2
          0
          3

      #### Explanation

      The first query corresponds to the green area in the diagram, since it is looking for topics under Eagles, and the query string matches just one question: "How endangered are eagles?" The second query corresponds to the blue area in the diagram, which is the subtree of Birds, and matches two questions that begin with "Where". The third corresponds to the red area, which does not have any questions that begin with "Why do". The final query corresponds to the entire tree, since Animals is the root topic, and matches three questions.

      ![Explanation Graph](/assets/images/cache/main-qimg-a46abed0785021bd98c56595a35b7eb5)

    + {: .foldme } 题解

      这道题是 quora 2018 年秋招人时，多个 code challenge 里的一道，虽然不难，但多年不做题的我想了两天才想出来，所以写一下。

      + Observation:

        假如我们把题目中的 tree 用数字表示，则询问一个类别及其子类别，实际是询问一段区间。 例：
        
            A ( B C ( C1 C2 ) )
            1 ( 2 3 (  4  5 ) )

        则询问 A，类别的范畴就是1-5, 询问 C，类别的范围就是3-5.

      + Observation:

        如果把所有的问题排个序

            1-A:  How?
            4-C1: What? 
            3-C:  Where?
            2-B:  Why?

        则各个类别就变成了

             A C1 C B

        询问 "Wh C" 就是问：

            在 What?-Why? 区间中(即C1 C B这三项中)，属于 C 类 (即3≤x≤5) 的有几个。

      + Key Observation:

        正常情况下，对区间进行统计，肯定是线段树(或树状数组)：比如，对 ``[ C1 C B ]`` 建树

            [ A   B=1  C=1  C1=1  C2 ]
               \   |    \     \    |
                \  |     \     \   |
                 \AB=1    \     \C12=1 
                    \      \       |
                     \      \_____C*=2
                      \           |
                       \__________*=3

        但是这里有10^5个询问，每个询问的区间又各不一样。

        关键的部分来了: ``Q([ C1 C B ], C) = Q([A C1 C B], C) - Q([A], C)``

        于是，只要从头到尾依次把所有点加进线段树，每个询问在区间首尾各询问一次做差，即可。

    + {: .foldme } 代码

      ~~~c++
      #include <array>
      #include <algorithm>
      #include <iostream>
      #include <fstream>
      #include <string>
      #include <sstream>
      #include <chrono>
      #include <vector>
      #include <queue>
      #include <unordered_set>
      #include <unordered_map>

      using namespace std;

      template <typename T>
      class RangeSumMarkAdd // query for range sum, op on range add
      {
          using ValueType = T;
          ValueType val;
      public:
          RangeSumMarkAdd():val(0){}
          RangeSumMarkAdd(ValueType t):val(t){}
          explicit operator bool () const { return static_cast<bool>(val); }
          const ValueType& get() const { return val; }
          void clear() { val = 0; }
          void operator+= (const RangeSumMarkAdd& rhs){ val += rhs.val; }
          ValueType apply(ValueType v, size_t r){ return v + r*val; }
      };

      template <typename ValueType_, typename MarkType_>
      class SegmentTree
      {

      #ifdef indexof
      #undef indexof
      #endif
      #define indexof(l,r) ((l+1==r)?(2*l):((l+r)/2*2-1))

      public:
          using ValueType = ValueType_;
          using MarkType = MarkType_;
      private:
          const int N;
          std::vector<ValueType> v;
          std::vector<MarkType> m;
      public:
          SegmentTree(size_t N_):N(N_), v(2*N-1), m(2*N-1){}
          SegmentTree(size_t N_, const std::vector<ValueType>& init_value):N(N_), v(2*N-1), m(2*N-1){
              build(0, N, init_value);
          }
          ValueType query(size_t l,size_t r) {
              return query_(0, N, l, r);
          }
          void update(size_t l,size_t r,const MarkType& mark) {
              update_(0, N, l, r, mark);
          }
      private:
          void build(size_t l, size_t r, const std::vector<ValueType> & init_value) {
              size_t ind = indexof(l,r);
              if(l+1<r) {
                  build(l, (l+r)>>1, init_value);
                  build((l+r)>>1, r, init_value);
                  v[ind]=v[indexof(l,(l+r)/2)] + v[indexof((l+r)/2,r)];
              }
              else {
                  v[ind]=init_value[l];
              }
          }
          void pushDown(size_t l, size_t r) {
              // if this node is marked then pushDown and clear the mark.
              auto ind = indexof(l, r);
              MarkType& mark=m[ind];
              if(static_cast<bool>(mark)) {
                  if(r-l>1) {
                      //not leaf, push down Mark;
                      m[indexof(l,(l+r)/2)] += mark;
                      m[indexof((l+r)/2,r)] += mark;
                  }
                  v[ind] = mark.apply(v[ind], r-l);
                  mark.clear();
              }
          }
          ValueType query_(size_t l, size_t r, size_t query_l, size_t query_r)
          {
              auto ind = indexof(l, r);
              auto mid = (l+r)/2;
              pushDown(l, r);//necessary.
              if(query_l<=l && r<=query_r) // [l,r) ⊂ [query_l, query_r)
                  return v[ind];
              if (query_l>=mid)
                  return query_(mid, r, query_l, query_r);
              if (query_r<=mid)
                  return query_(l, mid, query_l, query_r);
              return query_(l, mid, query_l, query_r) + query_(mid, r, query_l, query_r);
          }

          void update_(size_t l,size_t r, size_t update_l, size_t update_r, const MarkType& mark)
          {
              auto ind = indexof(l, r);
              auto mid = (l+r)/2;
      
              // after update_, node[ind] is clean and value updated.
              if(update_l<=l && r<=update_r) // [l,r) ⊂ [update_l, update_r)
              {
                  m[ind] += mark;
                  pushDown(l,r);
              }
              else
              {
                  pushDown(l,r);
                  if (update_l>=mid)
                      update_(mid, r, update_l, update_r, mark);
                  else if (update_r<=mid)
                      update_(l, mid, update_l, update_r, mark);
                  else
                  {
                      update_(l, mid, update_l, update_r, mark);
                      update_(mid, r, update_l, update_r, mark);
                  }
                  pushDown(l,mid);
                  pushDown(mid,r);
                  v[ind] = v[indexof(l,mid)] + v[indexof(mid,r)];
              }
          }
      };

      class Solution
      {
          struct MyTree {
              struct Node {
                  unsigned int parent;
                  unsigned int b,e;
                  std::vector<unsigned> child;
              };
              unsigned root;
              std::vector<Node> nodes;
          };
          struct sii
          {
              string s;
              unsigned int kind;
              unsigned index;
              bool operator <(const sii& rhs) const {return s<rhs.s;}
          };
          MyTree tree;
      public:
          int N,M,K;
          string flat_tree;
          vector<sii> qs;
          vector<sii> ks;
          vector<sii> qks;
          std::unordered_map<string, unsigned> dict;
          std::vector<std::pair<unsigned int, unsigned int> > be;
          void read_data(istream& cin)
          {
              cin>>N;cin.ignore();
              getline(cin,flat_tree);
              cin>>M;cin.ignore();
              vector<sii> q(M);
              for(int i=0;i<M;i++)
                  getline(cin,q[i].s);
              cin>>K;cin.ignore();
              vector<sii> k(K);
              for(int i=0;i<K;i++)
                  getline(cin,k[i].s);
              for(int i=0;i<K;i++)
                  k[i].index=i+1;
              qs = std::move(q);
              ks = std::move(k);
          }
          void parse_flat_tree()
          {
              be.resize(N+1);
              stringstream ss;
              ss << " _root_ ( " << flat_tree << " )";
              string token;
              ss >> token;
              dict[token]=0;
              tree.nodes.push_back({});
              tree.root=0;
              unsigned cur = 0;
              while(ss>>token)
              {
                  if (token[0] == '(')
                      cur = dict.size()-1;
                  else if (token[0] == ')')
                  {
                      be[cur].second = dict.size();
                      cur = tree.nodes[cur].parent;
                  }
                  else
                  {
                      dict[token] = dict.size();
                      tree.nodes.push_back({cur,{}});
                      tree.nodes[cur].child.push_back(dict[token]);
                      be[dict.size()-1].first = dict.size()-1;
                      be[dict.size()-1].second = dict.size();
                  }
              }
          }
          void process_question()
          {
              for(auto& s : qs)
              {
                  auto p = s.s.find(':');
                  s.kind = dict[s.s.substr(0, p)];
                  s.s = s.s.substr(p+2);
              }
              // sort(qs.begin(), qs.end());
          }
          void process_query()
          {
              for(auto& s : ks)
              {
                  auto p = s.s.find(' ');
                  s.kind = dict[s.s.substr(0, p)];
                  s.s = s.s.substr(p+1);
              }
              // sort(ks.begin(), ks.end());
          }
          void sort_query_and_question()
          {
              auto ks_dup = ks;
              for(auto& k : ks_dup)
                  k.s+=static_cast<char>(127);
              qks.insert(qks.end(), ks.begin(), ks.end());
              qks.insert(qks.end(), qs.begin(), qs.end());
              qks.insert(qks.end(), ks_dup.begin(), ks_dup.end());
              stable_sort(qks.begin(), qks.end());
          }
          void solve()
          {
              SegmentTree<unsigned, RangeSumMarkAdd<unsigned> > st(be.size());
              vector<char> met(K+1);
              vector<unsigned> ans(K+1);
              for(const auto& qk : qks)
              {
                  if (qk.index == 0)
                      st.update(qk.kind, qk.kind+1, 1);
                  else if (met[qk.index])
                          ans[qk.index] = st.query(be[qk.kind].first, be[qk.kind].second) - ans[qk.index];
                  else
                  {
                      met[qk.index] = 1;
                      ans[qk.index] = st.query(be[qk.kind].first, be[qk.kind].second) - ans[qk.index];
                  }
              }
              for(int i=1;i<=K;i++)
                  cout<<ans[i]<<'\n';
          }
      };

      int main(int argc, char *argv[])
      {
          Solution s;
      #ifdef LOCAL_RUN
          ifstream fin("a.in");
      #else
          auto& fin = cin;
      #endif
          s.read_data(fin);
          s.parse_flat_tree();
          s.process_question();
          s.process_query();
          s.sort_query_and_question();
          s.solve();
          return 0;
      }
      ~~~
