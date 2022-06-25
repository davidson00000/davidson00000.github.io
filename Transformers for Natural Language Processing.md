# Transformerによろ自然言語処理
## １.　Transformerのモデルkアーキテクチャ入門
### 1.1. Transformerの背景
- Transformerを生み出したのはGoogle Research
- アンドレイ・マルコフ＋乱数値という概念を生み出し、確立過程の理論を作った。マルコフ決定過程(Markov Decision Process)
- クロード・シャノン:通信モデルの基礎
- アラン・チューリング:チューリング機械
- ジョン・ホップフィールド:再帰型ニューラルネットワーク（RNN)。RNNは進化を遂げて、現在知られるLSTM(Long Short Term Memory)になった。RNNは一連の永続状態を効率的に記憶する。
- ヤン・ルカン:多目的畳み込みニューラルネットワーク(CNN)を設計。CNNをテキスト列に適用した。多くのCNNの元となったLeNet-5を開発した。CNNは効率的なアーキテクチャだが、非常に長くて複雑な系列では長期依存性の扱いに問題がある。
### 1.2. Transformerの勃興　Attention Is All You Need
- Google ResearchのVaswaniらは、画期的論文"Attention Is All You Need"を発表。
