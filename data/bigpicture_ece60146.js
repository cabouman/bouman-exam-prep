window.BIGPICTURE = window.BIGPICTURE || {};
(function(){
const R = String.raw; const B = window.BIGPICTURE;
B["ece60146/mt1/convex"] = R`<p><b>Why this exists.</b> Training a network is optimization, and the only optimization we fully understand is convex. Learning what convexity guarantees (local minima are global, gradient descent works) and what non-convexity costs (saddles, multiple minima, initialization dependence) is how you understand both why deep learning is hard and why it works anyway.</p>
<p><b>Where it sits.</b> Foundation for gradient descent, conditioning, and every convergence claim later in the course.</p>
<p><b>The one idea to carry away.</b> Convex means the chord lies above the graph; check curvature for smooth functions, use closure rules for composites, and remember that linear layers stacked with nonlinearities are not convex in the weights.</p>
<p><b>Where you meet it in practice.</b> Choosing losses, understanding training plateaus, and reading optimization theory in papers.</p>`;
B["ece60146/mt1/prob"] = R`<p><b>Why this exists.</b> Deep learning is statistics at scale. Random variables as functions, expectations as numbers, conditional expectations as random variables, and the fact that $E[X|Y]$ is the best predictor are what make loss functions meaningful: a network trained with squared error is estimating a conditional mean. Without this you can train models but not understand what they compute.</p>
<p><b>Where it sits.</b> Underlies ML and MAP estimation, the interpretation of MSE and cross-entropy, and the analysis of SGD noise.</p>
<p><b>The one idea to carry away.</b> The MMSE estimator is the conditional mean; a well-trained regression network approximates it.</p>
<p><b>Where you meet it in practice.</b> Denoisers, uncertainty estimation, and the design of any loss.</p>`;
B["ece60146/mt1/cnnparams"] = R`<p><b>Why this exists.</b> Architecture is arithmetic before it is art. Knowing how tensor shapes propagate and how many parameters a layer has lets you design networks that fit in memory, compare model sizes, and see why convolution is so much more economical than dense connections.</p>
<p><b>Where it sits.</b> Practical foundation for every network you build; pairs with the adjoint-gradient material on how those layers train.</p>
<p><b>The one idea to carry away.</b> A convolutional layer has $k^2C_{in}C_{out}+C_{out}$ parameters regardless of image size; that independence from image size is the whole point.</p>
<p><b>Where you meet it in practice.</b> Designing models, estimating compute and memory, and debugging shape errors.</p>`;
B["ece60146/mt1/adjoint"] = R`<p><b>Why this exists.</b> Back-propagation is multiplication by transposes of layer Jacobians. For convolution that transpose is another convolution with a flipped kernel, and for strided convolution it is a transposed convolution, the layer that decoders use. Writing the small matrices by hand demystifies what frameworks do automatically.</p>
<p><b>Where it sits.</b> Connects linear algebra to back-propagation and to encoder–decoder architectures.</p>
<p><b>The one idea to carry away.</b> Forward is convolve then downsample; backward is upsample by zero insertion then convolve with the reversed kernel; both cost the same.</p>
<p><b>Where you meet it in practice.</b> Implementing custom layers, U-Nets and segmentation decoders, and gradient checking.</p>`;
B["ece60146/mt1/gd"] = R`<p><b>Why this exists.</b> Gradient descent is the only optimizer that scales to millions of parameters, and its behavior is governed by conditioning: stiff directions limit the step, flat directions limit the speed. Every practical optimizer (momentum, Adam, normalization layers) is a response to this one problem.</p>
<p><b>Where it sits.</b> Uses convexity and linear algebra; motivates preconditioning, momentum and SGD.</p>
<p><b>The one idea to carry away.</b> Step size below two over the largest curvature; iterations proportional to the condition number; rescale directions to fix it.</p>
<p><b>Where you meet it in practice.</b> Learning-rate tuning, divergence diagnosis, and understanding why batch normalization helps.</p>`;
B["ece60146/mt1/mle"] = R`<p><b>Why this exists.</b> Loss functions are not arbitrary recipes; they are negative log-likelihoods. Cross-entropy with softmax is maximum likelihood for one-hot labels, and its gradient is the difference between predicted and true probabilities. Seeing this turns training from a heuristic into statistical estimation with known properties.</p>
<p><b>Where it sits.</b> Combines probability with optimization; extends to MAP and regularization in the second midterm.</p>
<p><b>The one idea to carry away.</b> Softmax maps logits into the simplex; minimizing cross-entropy maximizes likelihood; the optimum reproduces empirical frequencies.</p>
<p><b>Where you meet it in practice.</b> Every classifier and language model.</p>`;
B["ece60146/mt1/gradcomplex"] = R`<p><b>Why this exists.</b> Back-propagation is not a new mathematical idea; it is the chain rule evaluated in the cheap order. Understanding why multiplying from the scalar-loss end costs one forward pass, while the other order is prohibitive, explains the design of every automatic differentiation system.</p>
<p><b>Where it sits.</b> Foundation for the back-propagation chapter and for reasoning about training cost.</p>
<p><b>The one idea to carry away.</b> Keep every product matrix–vector by starting from the small end; for a scalar loss that means backward.</p>
<p><b>Where you meet it in practice.</b> Autograd, memory planning, and forward-mode versus reverse-mode differentiation.</p>`;
B["ece60146/mt1/train"] = R`<p><b>Why this exists.</b> The goal of training is performance on data you have not seen, and the validation curve is the only window onto it. Reading these curves correctly is the everyday skill of a practitioner.</p>
<p><b>Where it sits.</b> Introduces the generalization theme developed fully in Midterm 2.</p>
<p><b>The one idea to carry away.</b> Stop where validation loss is lowest; a widening gap means too much capacity for the data.</p>
<p><b>Where you meet it in practice.</b> Every training run.</p>`;
B["ece60146/mt2/train"] = R`<p><b>Why this exists.</b> A model that fits its training data is not the goal; a model that fits new data is. Overfitting and underfitting are the two ways to fail, the three data splits are how you detect them, and regularization, data and capacity are the levers. This is the practical core of applied deep learning.</p>
<p><b>Where it sits.</b> Builds on least squares versus MMSE and on MAP regularization; frames every architecture and optimizer choice.</p>
<p><b>The one idea to carry away.</b> Diagnose from the curves (gap versus level), then adjust capacity, data or regularization accordingly; report only test error.</p>
<p><b>Where you meet it in practice.</b> Model selection, hyperparameter tuning, and honest evaluation.</p>`;
B["ece60146/mt2/backprop"] = R`<p><b>Why this exists.</b> Training requires gradients of a scalar loss with respect to millions of parameters, and back-propagation delivers them at the cost of about two forward passes. Doing it by hand through a small network with a nonlinearity shows what must be stored, how errors flow through transposes and masks, and why frameworks organize layers as forward and backward functions.</p>
<p><b>Where it sits.</b> The computational heart of the course; uses adjoints, Jacobians and the chain rule.</p>
<p><b>The one idea to carry away.</b> Errors go backward through transposes, gated by nonlinearity derivatives; parameter gradients are outer products of errors and inputs.</p>
<p><b>Where you meet it in practice.</b> Custom layers, gradient debugging, and understanding vanishing and exploding gradients.</p>`;
B["ece60146/mt2/sgd"] = R`<p><b>Why this exists.</b> Full gradients over millions of examples are too expensive, so training uses noisy estimates from mini-batches. The noise is not just a nuisance: its variance scales as one over the batch size, small batches explore and escape local minima, large batches refine. Momentum and Adam are filters on this noisy gradient stream.</p>
<p><b>Where it sits.</b> Applies probability to optimization; explains learning-rate and batch-size practice.</p>
<p><b>The one idea to carry away.</b> The mini-batch gradient is unbiased with covariance $R/K_b$; trade noise for speed, and smooth it with momentum.</p>
<p><b>Where you meet it in practice.</b> Every training loop, learning-rate schedules, and large-batch scaling rules.</p>`;
B["ece60146/mt2/gan"] = R`<p><b>Why this exists.</b> Generative modeling asks a network to produce samples from a distribution rather than labels. GANs frame this as a game between a generator and a discriminator, and Bayes' rule shows the optimal discriminator outputs a posterior probability built from the likelihood ratio. The convexity argument proves that the game's equilibrium is the data distribution.</p>
<p><b>Where it sits.</b> Combines probability, classification and optimization; leads to the broader generative modeling chapter.</p>
<p><b>The one idea to carry away.</b> A classifier between real and fake estimates a density ratio; driving that ratio to one is how a generator learns.</p>
<p><b>Where you meet it in practice.</b> Image synthesis, data augmentation, domain adaptation, and density-ratio estimation.</p>`;
B["ece60146/mt2/seq"] = R`<p><b>Why this exists.</b> Language and other sequences are modeled by predicting the next element from the past; the chain rule makes this exact, and transformers make it scalable. Self-attention is content-adaptive averaging over similar tokens, which you can compute by hand in the high-dimensional limit. This is the mathematics behind large language models.</p>
<p><b>Where it sits.</b> Uses probability (chain rule), softmax and cross-entropy; the most recent and fastest-growing part of the course.</p>
<p><b>The one idea to carry away.</b> Factor the joint into conditionals and sample sequentially; attention averages each token with those that resemble it, at quadratic cost in context length.</p>
<p><b>Where you meet it in practice.</b> Language models, protein and code generation, and sequence modeling of every kind.</p>`;
B["ece60146/mt2/mapreg"] = R`<p><b>Why this exists.</b> Every loss and every regularizer has a probabilistic origin: noise models give losses, priors on weights give penalties. Knowing this lets you derive the right loss for a new problem instead of guessing, and explains weight decay and L1 sparsity as Bayesian estimation.</p>
<p><b>Where it sits.</b> Extends ML estimation from Midterm 1 to MAP; connects to the plug-and-play view of priors.</p>
<p><b>The one idea to carry away.</b> Loss equals negative log-likelihood; regularizer equals negative log-prior; the coefficient is a ratio of variances.</p>
<p><b>Where you meet it in practice.</b> Loss design, weight decay, and regularization choices.</p>`;
B["ece60146/mt2/precond"] = R`<p><b>Why this exists.</b> Gradient descent's slowness on ill-conditioned problems is fixed by rescaling directions. Newton's method is the ideal but unaffordable; Gauss–Newton and diagonal preconditioners are the affordable approximations, and Adam is a diagonal preconditioner in disguise.</p>
<p><b>Where it sits.</b> Follows conditioning; explains adaptive optimizers.</p>
<p><b>The one idea to carry away.</b> Any positive-definite preconditioner keeps descent; the closer it is to the inverse Hessian, the fewer steps.</p>
<p><b>Where you meet it in practice.</b> Adam, RMSProp, second-order methods, and nonlinear least squares.</p>`;
B["ece60146/mt2/genrv"] = R`<p><b>Why this exists.</b> Generative models need random inputs with known distributions, and sampling from a softmax needs the inverse-CDF idea. These small procedures are the plumbing under GANs, VAEs, diffusion models and text generation.</p>
<p><b>Where it sits.</b> Probability applied to computation; supports the generative chapter.</p>
<p><b>The one idea to carry away.</b> A uniform plus a monotone map yields any distribution; Gaussians come from Box–Muller; rejection handles the rest.</p>
<p><b>Where you meet it in practice.</b> Latent sampling, token sampling with temperature, Monte Carlo estimates.</p>`;
B["ece60146/mt2/cnn2"] = R`<p><b>Why this exists.</b> Parameter counting through pooling and dense heads shows where model size actually goes and motivates architectural choices such as global average pooling.</p>
<p><b>Where it sits.</b> Continuation of the Midterm 1 shape arithmetic.</p>
<p><b>The one idea to carry away.</b> Dense heads dominate parameter counts; convolutions do not grow with image size.</p>
<p><b>Where you meet it in practice.</b> Designing efficient classifiers.</p>`;
B["ece60146/mt2/denoise"] = R`<p><b>Why this exists.</b> Denoising is the simplest inverse problem and the training task behind diffusion models and plug-and-play reconstruction. Seeing an image as a point in a huge space, with narrow conditional distributions for each pixel, explains why learned denoisers beat linear filters and why predicting the noise (residual learning) trains better.</p>
<p><b>Where it sits.</b> Connects probability, CNN architecture and training practice; bridge to generative and inverse-problem applications.</p>
<p><b>The one idea to carry away.</b> A denoiser estimates a conditional mean; train it to output the noise through a skip connection.</p>
<p><b>Where you meet it in practice.</b> Diffusion models, medical image reconstruction, and computational photography.</p>`;
})();
