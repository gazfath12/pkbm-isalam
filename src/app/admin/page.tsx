"use client";

import { useActionState } from "react";
import { loginAction } from "@/lib/actions/auth";
import styles from "./admin.module.css";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiLock, FiUser } from "react-icons/fi";

export default function AdminLogin() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <div className={styles.loginContainer}>
      {/* Decorative Orbs */}
      <div className={styles.loginOrb1} />
      <div className={styles.loginOrb2} />

      <div className={styles.loginCard}>
        <Link href="/" className={styles.loginBackLink}>
          <FiArrowLeft /> Kembali ke Beranda
        </Link>

        <div className={styles.loginHeader}>
          <Image 
            src="/assets/logo_transparent.png" 
            alt="Pusdiklat ISALAM Logo" 
            width={70} 
            height={70} 
            className={styles.logoImg}
          />
        </div>

        <h2 className={styles.loginTitle}>
          Admin <span>PUSDIKLAT I-SALAM</span>
        </h2>
        
        <form action={formAction} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>Username</label>
            <div className={styles.inputWrapper}>
              <FiUser className={styles.inputIcon} />
              <input 
                type="text" 
                id="username" 
                name="username" 
                required
                className={styles.input}
                placeholder="Username admin"
                autoComplete="username"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <div className={styles.inputWrapper}>
              <FiLock className={styles.inputIcon} />
              <input 
                type="password" 
                id="password" 
                name="password" 
                required
                className={styles.input}
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </div>
          </div>
          
          {state?.error && (
            <div className={styles.errorMsg}>
              {state.error}
            </div>
          )}

          <button 
            type="submit" 
            disabled={isPending}
            className={styles.submitBtn}
          >
            {isPending ? "Memverifikasi..." : "Masuk ke Dashboard"}
          </button>
        </form>
        
        <p className={styles.loginFooterText}>
          &copy; {new Date().getFullYear()} Pusdiklat ISALAM. All rights reserved.
        </p>
      </div>
    </div>
  );
}
