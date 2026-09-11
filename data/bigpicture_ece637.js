window.BIGPICTURE = window.BIGPICTURE || {};
(function(){
const R = String.raw; const B = window.BIGPICTURE;
B["ece637/exam1/ct"] = R`<p><b>Why this exists.</b> Computed tomography is the course's first complete imaging system: physics (photons attenuate exponentially), statistics (counts are Poisson), and a mathematical transform (the log turns attenuation into line integrals) all in one. Understanding why a CT scanner takes a blank scan and a log is understanding how raw measurements become data a reconstruction algorithm can use.</p>
<p><b>Where it sits.</b> Uses the exponential ODE from calculus and Poisson statistics; feeds the Radon transform and Fourier slice theorem, and later the beam-hardening and model-based reconstruction discussions.</p>
<p><b>The one idea to carry away.</b> Measurements are multiplicative and noisy; the log ratio of object to blank scan makes them additive line integrals, at the price of noise that grows as photons disappear.</p>
<p><b>Where you meet it in practice.</b> Medical and industrial CT, security scanning, and any transmission measurement (optical density, absorption spectroscopy).</p>`;
B["ece637/exam1/plane"] = R`<p><b>Why this exists.</b> Two-dimensional Fourier analysis is the language of the whole course, and the plane wave is its alphabet: every image is a sum of plane waves with different frequencies, orientations and phases. Learning to read a pair of impulses as a striped pattern with a specific period and angle is what lets you interpret every spectrum, sampling diagram and filter response that follows.</p>
<p><b>Where it sits.</b> Extends 1-D Fourier transforms to 2-D; prerequisite for sampling, filtering, tomography (the slice theorem) and MRI (k-space samples are plane-wave coefficients).</p>
<p><b>The one idea to carry away.</b> A point in the frequency plane is a plane wave in the image: its distance from the origin is the spatial frequency, its direction is the wave's orientation.</p>
<p><b>Where you meet it in practice.</b> Reading k-space in MRI, diagnosing aliasing and Moiré, designing oriented filters, and interpreting texture spectra.</p>`;
B["ece637/exam1/lsi"] = R`<p><b>Why this exists.</b> Linear shift-invariant filtering is the most basic image operation, and its frequency-domain view explains what blurring, sharpening and edge enhancement actually do. Separability and symmetry are the engineering side: they make the difference between a filter you can afford to run on a large image and one you cannot.</p>
<p><b>Where it sits.</b> Builds on the DSFT; leads to sampling-and-display compensation filters, random-process filtering and the linear-systems theory on the final.</p>
<p><b>The one idea to carry away.</b> A filter is fully described by its frequency response; unit DC gain preserves brightness, and unsharp masking is subtracting a scaled Laplacian.</p>
<p><b>Where you meet it in practice.</b> Every image editor's blur and sharpen tools, camera pipelines, medical image display, and the convolutional layers of neural networks.</p>`;
B["ece637/exam1/sampling"] = R`<p><b>Why this exists.</b> Digital images are samples of a continuous light field, displayed by another physical device. Sampling theory tells you when the samples capture everything (Nyquist), what happens when they do not (aliasing), and how real detectors and displays, which integrate over areas rather than sampling points, blur the picture. It is the bridge between the physical world and the discrete arrays we compute on.</p>
<p><b>Where it sits.</b> Uses rep and comb identities from the fact sheet; reappears in MRI (k-space sampling), rate conversion, and the camera-display chain on the final.</p>
<p><b>The one idea to carry away.</b> Sampling replicates the spectrum; if the replicas do not overlap the signal is recoverable, and every physical aperture multiplies the spectrum by its own transform.</p>
<p><b>Where you meet it in practice.</b> Choosing sensor resolution, anti-aliasing filters, image resizing, and understanding the softness of displayed images.</p>`;
B["ece637/exam1/radon"] = R`<p><b>Why this exists.</b> CT measures line integrals, not pixels. The Radon transform formalizes that measurement, and the Fourier slice theorem shows that a projection's 1-D spectrum is a slice of the image's 2-D spectrum. That single theorem is why CT reconstruction is possible and how filtered back-projection is derived.</p>
<p><b>Where it sits.</b> Combines 2-D Fourier analysis with the CT physics chapter; leads to filtered back-projection and to radial MRI.</p>
<p><b>The one idea to carry away.</b> Projections in space are slices in frequency; enough angles fill the frequency plane.</p>
<p><b>Where you meet it in practice.</b> CT, PET and SPECT reconstruction, electron tomography, and seismic imaging.</p>`;
B["ece637/exam1/mri"] = R`<p><b>Why this exists.</b> MRI is the imaging modality that most directly is a Fourier transform: the received signal at each instant is one Fourier coefficient of the object, and gradients steer which coefficient. Understanding this turns MRI from magic into sampling theory, and explains field of view, resolution and scan time in one stroke.</p>
<p><b>Where it sits.</b> Applies plane waves and sampling to a physical system; later problems add non-uniform trajectories and reconstruction from partial k-space.</p>
<p><b>The one idea to carry away.</b> Phase accumulated under a gradient encodes position as spatial frequency; the scanner samples k-space, and the image is an inverse Fourier transform.</p>
<p><b>Where you meet it in practice.</b> Clinical MRI, compressed-sensing MRI, and by analogy radar and synthetic-aperture imaging.</p>`;
B["ece637/exam1/dsft"] = R`<p><b>Why this exists.</b> The discrete-space Fourier transform is how you analyze the digital images you actually compute with. Its properties (separability into row and column transforms, periodicity, projection-slice relations) are small facts that make later derivations one-liners and expose what information projections carry.</p>
<p><b>Where it sits.</b> Discrete counterpart of the CSFT; used in every filter and sampling problem.</p>
<p><b>The one idea to carry away.</b> A 2-D transform is two 1-D transforms, and the zero-frequency value of any transform is a sum.</p>
<p><b>Where you meet it in practice.</b> FFT-based filtering, spectral analysis of textures, and discrete tomography.</p>`;
B["ece637/exam1/dtlti"] = R`<p><b>Why this exists.</b> Image processing inherits its tools from 1-D signal processing. Poles, zeros, regions of convergence and cascades are the vocabulary for recursive filters, AR models and stability, all of which the course uses in two dimensions.</p>
<p><b>Where it sits.</b> Review of prerequisites; directly reused in 2-D IIR filters and random-process problems.</p>
<p><b>The one idea to carry away.</b> Poles shape the response and decide stability; zeros create nulls; cascades multiply.</p>
<p><b>Where you meet it in practice.</b> Recursive smoothing, prediction filters, and control of any sampled system.</p>`;
B["ece637/exam2/color"] = R`<p><b>Why this exists.</b> Color is not a physical property of light but a three-number response of the eye. Colorimetry makes this precise: tristimulus values, chromaticity diagrams, gamuts, and the linear transforms between color spaces. Without it you cannot calibrate a camera, build a display, or explain why two spectra look identical. It is also a beautiful example of linear algebra meeting biology.</p>
<p><b>Where it sits.</b> Uses linear systems and eigen-analysis ideas; leads to gamma correction, color fidelity metrics and camera-display pipelines.</p>
<p><b>The one idea to carry away.</b> Three primaries span a triangle on the chromaticity diagram; real colors outside it need negative amounts, which is why sensors and displays need different color spaces linked by a matrix.</p>
<p><b>Where you meet it in practice.</b> Display and printer calibration, camera color correction, wide-gamut standards, and color management in every imaging product.</p>`;
B["ece637/exam2/eigen"] = R`<p><b>Why this exists.</b> Images are high-dimensional random vectors, and eigen-decomposition of their covariance reveals the few directions that carry most of the variation. This is principal component analysis, the Karhunen–Loève transform, whitening, and the theory behind synthesizing correlated data. It is the first place the course treats an image as a point in a space rather than a function.</p>
<p><b>Where it sits.</b> Uses linear algebra; underlies MMSE estimation, rate–distortion coding and the multivariate Gaussian models used everywhere later.</p>
<p><b>The one idea to carry away.</b> Rotate to the eigenbasis and a correlated Gaussian becomes independent coordinates with variances equal to the eigenvalues; everything else (contours, whitening, compression) reads off from that.</p>
<p><b>Where you meet it in practice.</b> Dimensionality reduction, eigenfaces, transform coding, and the initial analysis of any high-dimensional dataset.</p>`;
B["ece637/exam2/rp"] = R`<p><b>Why this exists.</b> Noise and texture are random, so filters must be understood by what they do to statistics, not just to deterministic signals. Autocorrelation and power spectra make that possible, and AR models give a compact generative description of textures that also yields optimal predictors. This is the statistical half of the course's signal processing.</p>
<p><b>Where it sits.</b> Builds on LTI filtering; leads to MMSE and least-squares estimation, texture synthesis, and the GMRF priors of the follow-on course.</p>
<p><b>The one idea to carry away.</b> Filtering white noise colors it by $|H|^2$; an AR process is the reverse, and its prediction errors are white.</p>
<p><b>Where you meet it in practice.</b> Noise modeling in sensors, texture synthesis, speech and audio coding, and spectral estimation.</p>`;
B["ece637/exam2/gamma"] = R`<p><b>Why this exists.</b> Displays and eyes are nonlinear. Gamma encoding matches code values to perception so that eight bits suffice, but it means that pixel values are not proportional to light. Knowing which operations must happen in linear light (averaging, blending, blurring) and which in code space (storage) prevents a class of subtle errors.</p>
<p><b>Where it sits.</b> Connects colorimetry to practical display engineering and to quantization.</p>
<p><b>The one idea to carry away.</b> Convert to linear light before combining light; store and transmit in gamma space.</p>
<p><b>Where you meet it in practice.</b> Image resizing and compositing, HDR pipelines, and display calibration.</p>`;
B["ece637/exam2/lpf"] = R`<p><b>Why this exists.</b> The ideal low-pass filter is the reference point for anti-aliasing, interpolation and band limiting. Its discrete-time form teaches DTFT periodicity and the practical necessity of windowing.</p>
<p><b>Where it sits.</b> Supports sampling, rate conversion and filter design.</p>
<p><b>The one idea to carry away.</b> A rect in frequency is a sinc in time, scaled by the fraction of the band kept; real filters truncate it and pay in ripple.</p>
<p><b>Where you meet it in practice.</b> Resampling, decimation, and reconstruction filters.</p>`;
B["ece637/exam2/edge"] = R`<p><b>Why this exists.</b> Edges are where the information in images concentrates. Discrete derivatives approximate the calculus, but their noise sensitivity and localization problems force combined rules and pre-smoothing. It is a compact introduction to feature extraction.</p>
<p><b>Where it sits.</b> Applies LSI filtering; precursor to the nonlinear filters and to learned feature detectors.</p>
<p><b>The one idea to carry away.</b> Derivatives are high-pass filters; detect edges by a large first derivative at a zero crossing of the second.</p>
<p><b>Where you meet it in practice.</b> Edge maps for segmentation, feature detection, and the first layers of convolutional networks.</p>`;
B["ece637/exam2/samp2"] = R`<p><b>Why this exists.</b> Sampling grids need not be square. The linear-transformation property of the Fourier transform shows how rotated or sheared coordinates reshape the spectrum, which is how you reason about hexagonal sampling and oblique acquisition.</p>
<p><b>Where it sits.</b> Extends the sampling chapter; used in advanced acquisition designs.</p>
<p><b>The one idea to carry away.</b> Transform the coordinates and the spectrum transforms by the inverse transpose; match the sampling lattice to the spectral support.</p>
<p><b>Where you meet it in practice.</b> Hexagonal sensors, non-Cartesian MRI, and geometric image warping.</p>`;
B["ece637/exam2/mmse"] = R`<p><b>Why this exists.</b> Optimal linear estimation from noisy data is the simplest form of learning: minimize expected squared error over the filter weights. It introduces the normal equations, orthogonality, and the difference between knowing statistics and estimating them from samples, which is the conceptual seed of the deep learning course.</p>
<p><b>Where it sits.</b> Uses random-process statistics; leads to least-squares filter design and Wiener filtering.</p>
<p><b>The one idea to carry away.</b> The best linear estimator solves $R\theta=b$; replace expectations by sample averages and you have machine learning.</p>
<p><b>Where you meet it in practice.</b> Denoising and deblurring filters, prediction, and every regression problem.</p>`;
B["ece637/exam2/hvs"] = R`<p><b>Why this exists.</b> The final consumer of most images is a human eye, so display design must be judged in visual angle and against the eye's contrast sensitivity. The incoherent-light argument shows how probability enters even the physics of illumination.</p>
<p><b>Where it sits.</b> Connects sampling and halftoning to perception.</p>
<p><b>The one idea to carry away.</b> Convert pixels to cycles per degree; what the eye cannot resolve does not matter.</p>
<p><b>Where you meet it in practice.</b> Display specifications, viewing-distance guidelines, and halftone quality.</p>`;
B["ece637/final/samp"] = R`<p><b>Why this exists.</b> Sampling and reconstruction are the beginning and end of every digital imaging pipeline, and rate conversion is how images are resized. The final tests the complete story with units because in practice the errors are unit errors and aliasing that nobody noticed.</p>
<p><b>Where it sits.</b> Cumulative: uses the CTFT, DTFT, filters and the detector-display models.</p>
<p><b>The one idea to carry away.</b> Replicate, check for overlap, select the base band; to upsample, insert zeros and low-pass with gain $L$.</p>
<p><b>Where you meet it in practice.</b> Image pyramids, zooming, super-resolution, and the design of acquisition and display hardware.</p>`;
B["ece637/final/ct"] = R`<p><b>Why this exists.</b> CT is the course's showcase system, and the final asks for the parts that make it real: material path lengths from calibrated scans, beam hardening from polychromatic sources, the Fourier slice theorem and filtered back-projection.</p>
<p><b>Where it sits.</b> Combines the physics of Exam 1 with the Fourier analysis of the whole course.</p>
<p><b>The one idea to carry away.</b> Logs make projections linear; slices of the spectrum come from projections; the ramp filter undoes the $1/r$ blur of back-projection; broadband sources break the linearity.</p>
<p><b>Where you meet it in practice.</b> Every CT product, industrial inspection, and model-based reconstruction research.</p>`;
B["ece637/final/ls"] = R`<p><b>Why this exists.</b> Designing a filter from examples rather than from a model is the beginning of learning, and the distinction between least squares (what you can compute) and MMSE (what you want) is the beginning of statistical learning theory: training error is optimistic, expected error is the goal.</p>
<p><b>Where it sits.</b> Follows MMSE estimation and random processes; motivates the neural-network denoisers of later courses.</p>
<p><b>The one idea to carry away.</b> Sample averages replace expectations; the resulting estimator is random and overfits unless the data far exceed the parameters.</p>
<p><b>Where you meet it in practice.</b> Learned denoisers, regression, and validation methodology.</p>`;
B["ece637/final/lti"] = R`<p><b>Why this exists.</b> Linearity and shift invariance are the assumptions behind convolution, frequency responses and most of the course. Knowing precisely what they mean, how to prove or disprove them, and why they force the convolution form protects you from applying frequency-domain reasoning to systems (median, bilateral, networks with pooling) where it does not hold.</p>
<p><b>Where it sits.</b> Foundation revisited at the end; organizes everything from filters to random-process theory.</p>
<p><b>The one idea to carry away.</b> Linear plus shift invariant equals convolution, and complex exponentials are the eigenfunctions.</p>
<p><b>Where you meet it in practice.</b> Deciding when Fourier methods apply, and understanding the inductive bias of convolutional networks.</p>`;
B["ece637/final/rpfinal"] = R`<p><b>Why this exists.</b> Texture is random structure, and AR models capture it with a handful of coefficients. Analysis (fit and whiten) and synthesis (color white noise) are inverse operations that also explain prediction, compression and generative modeling in miniature.</p>
<p><b>Where it sits.</b> Cumulative use of random processes, least squares and LTI systems.</p>
<p><b>The one idea to carry away.</b> A stationary Gaussian process is white noise through a filter; learning the filter is least squares.</p>
<p><b>Where you meet it in practice.</b> Texture synthesis, speech coding, and priors for image reconstruction.</p>`;
B["ece637/final/mri"] = R`<p><b>Why this exists.</b> MRI is Fourier sampling made physical; the final tests whether you can follow the model into a new gradient waveform, which is what real sequence design requires.</p>
<p><b>Where it sits.</b> Applies sampling theory to k-space.</p>
<p><b>The one idea to carry away.</b> $k(t)$ is the integral of the gradient; sample spacing in $k$ sets the field of view, the extent sets the resolution.</p>
<p><b>Where you meet it in practice.</b> Pulse sequence design, fast imaging, and compressed-sensing MRI.</p>`;
B["ece637/final/halftone"] = R`<p><b>Why this exists.</b> Printers and many displays are binary, yet they render gray. Halftoning is the study of where to put the error: white-noise screens spread it everywhere, ordered dither pushes it to high frequencies, error diffusion shapes it adaptively. It is a clean case study in designing error spectra for a human observer.</p>
<p><b>Where it sits.</b> Uses random-process statistics, the DSFT and the human contrast-sensitivity function.</p>
<p><b>The one idea to carry away.</b> Quantization error is unavoidable; move it to frequencies the eye does not see.</p>
<p><b>Where you meet it in practice.</b> Printing, e-paper, LED displays, and audio dithering.</p>`;
B["ece637/final/bilateral"] = R`<p><b>Why this exists.</b> Linear filters cannot remove noise without blurring edges. The bilateral filter is the classic nonlinear fix: weight neighbors by similarity as well as distance. Studying it teaches how to reason about nonlinear filters and foreshadows attention mechanisms and non-local means.</p>
<p><b>Where it sits.</b> Contrast to LSI filtering; bridge to learned denoisers.</p>
<p><b>The one idea to carry away.</b> Adaptive weights preserve edges; nonlinearity is the price, and outliers are the failure mode.</p>
<p><b>Where you meet it in practice.</b> Photo denoising, tone mapping, and the kernel-weight view of attention.</p>`;
B["ece637/final/colorfinal"] = R`<p><b>Why this exists.</b> Color transforms are matrices whose entries have physical meaning; the final asks you to read primaries and white point off a matrix, the everyday task of color management.</p>
<p><b>Where it sits.</b> Applies the colorimetry chapter.</p>
<p><b>The one idea to carry away.</b> Columns are primaries, the all-ones image is white.</p>
<p><b>Where you meet it in practice.</b> Display profiles and camera calibration.</p>`;
B["ece637/final/cnn"] = R`<p><b>Why this exists.</b> Convolutional networks are LSI filters with learned kernels and nonlinearities; counting their parameters and understanding overfitting connects this course to deep learning.</p>
<p><b>Where it sits.</b> Bridge to the deep learning course.</p>
<p><b>The one idea to carry away.</b> Weight sharing makes convolution cheap and shift invariant; generalization is measured on held-out data.</p>
<p><b>Where you meet it in practice.</b> Learned denoisers and image classifiers.</p>`;
B["ece637/final/misc"] = R`<p><b>Why this exists.</b> Rate–distortion theory sets the limits of compression, and the wave equation is the physics behind every imaging modality; both are one-lecture topics that occasionally appear.</p>
<p><b>Where it sits.</b> Peripheral to the main line.</p>
<p><b>The one idea to carry away.</b> Decorrelate before coding; plane waves are eigen-solutions of the wave equation with speed frequency over spatial frequency.</p>
<p><b>Where you meet it in practice.</b> Image compression standards and optics.</p>`;
})();
